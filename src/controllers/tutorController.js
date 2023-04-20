const Tutor = require('../models/Tutor');

module.exports = {
    async addTutor(req, res) {  
        const tutor = {
            name: req.name,
            phone: req.phone,
            city: req.city,
            about: req.about
        }
        //const tutorDatabase = await Tutor.create(tutor);
        res.json(tutor);
    },

    
    async getAllTutors(req, res) {
        const tutors = await Tutor.findAll();
        res.json(tutors);
        },

    async updateTutorById(req, res) {
        const fields = {
            name: req.name,
            phone: req.phone,
            city: req.city,
            about: req.about
        };

        const id = req.params['id'];
        const tutor = await Tutor.update(fields, {
            where: {
                id: id
            }
        });

        res.json(tutor);
    }
}