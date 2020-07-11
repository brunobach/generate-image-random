const createCanvas = require('../services/createCanvas')
const createData = require('../services/createData')
const readData = require('../services/readData')
const api = require('../services/apiRequest')
require('dotenv').config()

const path = require('path')

module.exports = {
	create(req, res) {
		const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
		const details = req.headers['user-agent']

		readData.read().then((data) => {
			const dataParser = JSON.parse(data)
			const lastData = dataParser.length + 1
			const date = new Date().toLocaleString('pt', {
				day: 'numeric',
				month: 'short',
				year: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
			})

			const dataFull = [
				...dataParser,
				{
					user: lastData - 1,
					userDetail: [ip, details, date],
				},
			]
			api.request(process.env.URL_GIT_PROFILE).then((data) => {
				api.request(process.env.URL_GIT_FOLLOW).then((infos) => {
					createCanvas.create(lastData, data, infos, date)
				})
			})

			createData
				.create(dataFull)
				.then(res.sendFile(path.join(__dirname, '..', 'images', 'canvas.png')))
		})
	},
}
