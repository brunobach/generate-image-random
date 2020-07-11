const express = require('express')
const app = express()
const fs = require('fs')
const { createCanvas } = require('canvas')
const path = require('path')

const WIDTH = 500
const HEIGHT = 100

const canvas = createCanvas(WIDTH, HEIGHT)
const ctx = canvas.getContext('2d')


const diretorio = path.join(__dirname, 'data.json')

const criarArquivo = (data) =>{
    
	return new Promise((resolve, reject) => {
		try {
			resolve(fs.writeFileSync(diretorio, JSON.stringify(data)))
			
		} catch (e) {
			reject(e)
		}
	})
}   

const lerArquivo = () => {
	return new Promise((resolve, reject) => {
		try {
			const dados = fs.readFileSync(diretorio, {encoding: 'utf-8'})
			resolve(dados)
		} catch (e) {
			reject(e)
		}
	})
}

const criarCanvas = (qtd) => {
	ctx.fillStyle = '#222222'
	ctx.fillRect(0, 0, WIDTH, HEIGHT)
	ctx.fillStyle = '#f2f2f2'
	ctx.font = '45px Arial'
	ctx.fillText(`Seja bem vindo: ${qtd}`, 13, 35)
	ctx.fillText(`Seja bem vindo: ${qtd}`, 55, 80)

	const buffer = canvas.toBuffer('image/png')
	fs.writeFileSync(path.join(__dirname, 'images','canvas.png'), buffer)
}

app.get('/', (req, res) => {   
	

	const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress   
	const details =  req.headers['user-agent']
    
	lerArquivo()
		.then(users => {
			const dados = JSON.parse(users)
			const ultimo = dados.length + 1
            
			const data = [...dados, {
				user: (ultimo -1),
				userDetail: [ip, details]
			}]
			criarCanvas(ultimo)
			criarArquivo(data)
				.then(
					res.sendFile(path.join(__dirname, 'images', 'canvas.png')))
		})
})

app.listen(3000, () => {
	console.log('---> Server Started! port 3000')
})
