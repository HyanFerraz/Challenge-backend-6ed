const Shelter = require('../models/Shelter');

module.exports = {
    async getAllShelters(req, res) {
        const shelters = await Shelter.findAll();
        res.json(shelters);
    },

    async addShelter(req, res) {
        const { name, phone, city, state } = req.body

        const shelter = await Shelter.create({
            name,
            phone, 
            city, 
            state
        });

        res.json(shelter);
    },

    async getShelterById(req, res) {
        const id = req.params['id'];
        const shelter = await Shelter.findByPk(id);

        res.json(shelter)
    },

    async updateShelterById(req, res) {
        const { name, phone, city, about } = req.body;
        const id = req.params['id'];
        
        const fields = {
            name,
            phone,
            city,
            about
        };
        
        const shelter = await Shelter.update(fields, {
            where: {
                id: id
            }
        });
        if (shelter === null){
            res.json({'Shelter' : 'Not Found'});
        }
        else{
            res.json({'Shelter' : 'updated'})
        }
    },

    async deleteShelterById(req, res) {
        const id = req.params['id'];

        const shelter = await Shelter.destroy({
            where: {
                id
            }
        })

        res.json({'Shelter' : 'Deleted'})
    },

}