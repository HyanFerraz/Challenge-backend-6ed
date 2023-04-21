const express = require('express');
const routes = express.Router();

const tutorController = require('../controllers/tutorController')

routes.post('/tutors/create', tutorController.addTutor);
routes.get('/tutors/:id', tutorController.getTutorById);
routes.put('/tutors/:id', tutorController.updateTutorById);
routes.delete('/tutors/:id', tutorController.deleteTutorById);
routes.get('/tutors', tutorController.getAllTutors);

module.exports = routes;