const fs = require('fs')
const path = require('path')

const directorySrc = path.join(__dirname, '..', 'data', 'data.json')

module.exports = {
	read(){
		return new Promise((resolve, reject) => {
			try {
				const dados = fs.readFileSync(directorySrc, {encoding: 'utf-8'})
				resolve(dados)
			} catch (e) {
				reject(e)
			}
		})
	}
}