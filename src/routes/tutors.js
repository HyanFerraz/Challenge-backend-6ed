const express = require('express');
const routes = express.Router();

const tutorController = require('../controllers/tutorController')

routes.post('/tutors/create', tutorController.addTutor());
routes.get('/tutors', tutorController.getAllTutors());

module.exports = routes;