const express = require('express');
const routes = express.Router();

const adoptionController = require('../controllers/adoptionController')

routes.post('/:shelterId/adoption', adoptionController.store)
routes.delete('/adoptions/:adoptionId', adoptionController.delete)

module.exports = routes;