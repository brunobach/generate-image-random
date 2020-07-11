const fs = require('fs')
const path = require('path')

const directorySrc = path.join(__dirname, '..', 'data', 'data.json')

module.exports = {
	create(data){
		return new Promise((resolve, reject) => {
			try {
				resolve(fs.writeFileSync(directorySrc, JSON.stringify(data)))
                
			} catch (e) {
				reject(e)
			}
		})
	}
}