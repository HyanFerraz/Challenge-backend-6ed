const express = require('express');
const routes = express.Router();

const shelterController = require('../controllers/shelterController');

routes.post('/shelters/create', shelterController.addShelter);
routes.get('/shelters/:id', shelterController.getShelterById);
routes.put('/shelters/:id', shelterController.updateShelterById);
routes.delete('/shelters/:id', shelterController.deleteShelterById);
routes.get('/shelters', shelterController.getAllShelters);

module.exports = routes;