const readData = require('../services/readData')

module.exports = {
	read(req, res){        
		readData.read()
			.then(data => {
				const dataParser = JSON.parse(data)
				res.json(dataParser)
			})

	}
}
