const express = require('express');
const routes = express.Router();

const petController = require('../controllers/petController')

routes.post('/:id/pets/create', petController.addPet);
routes.get('/pets/:id', petController.getPetById);
routes.put('/pets/:id', petController.updatePetById);
routes.delete('/pets/:id', petController.deletePetById);
routes.get('/pets', petController.getAllPets);

module.exports = routes;