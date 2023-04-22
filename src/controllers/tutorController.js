const Tutor = require('../models/Tutor');

module.exports = {
    async getAllTutors(req, res) {
        const tutors = await Tutor.findAll();
        res.json(tutors);
        },

    async addTutor(req, res) {  
        const { name, phone, city, about } = req.body;

        const tutor = await Tutor.create({
            name,
            phone,
            city,
            about
        });

        res.json(tutor);
    },

    async getTutorById(req, res) {
        const id = req.params['id'];
        const tutor = await Tutor.findByPk(id);

        res.json(tutor);
    },

    async updateTutorById(req, res) {
        const { name, phone, city, about } = req.body;
        const id = req.params['id'];
        
        const fields = {
            name,
            phone,
            city,
            about
        };
        
        const tutor = await Tutor.update(fields, {
            where: {
                id: id
            }
        });
        if (tutor === null){
            res.json({'Tutor' : 'Not Found'});
        }
        else{
            res.json({'Tutor' : 'updated'})
        }
    },

    async deleteTutorById(req, res) {
        const id = req.params['id'];

        const tutor = await Tutor.destroy({
            where: {
                id
            }
        })

        res.json({'Tutor' : 'Deleted'})
    }
}