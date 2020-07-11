const { default: Axios } = require('axios')
require('dotenv').config()

module.exports = {
	request(url_request) {
		return new Promise((resolve, reject) => {
			try {
				resolve(Axios.get(url_request, {
					'headers': {
						'Authorization': `token ${process.env.GIT_TOKEN}`
					}
				}))
			} catch (e) {
				reject(e)
			}
		})
		
	},
}
