const express = require('express')
const app = express()

const routes = require('./routes/routes')
app.use(routes)

app.listen(80, () => {
	console.log('--> Server Started!')
})
