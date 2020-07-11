const { Router } = require('express')

const createController = require('../controllers/createController')
const readController = require('../controllers/readController')
const routes = Router()

routes.get('/image', createController.create)
routes.get('/stats', readController.read)

module.exports = routes