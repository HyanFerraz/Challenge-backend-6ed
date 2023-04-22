const Pet = require('../models/Pet');

module.exports = {
    async getAllPets(req, res) {
        const pets = await Pet.findAll();
        res.json(pets);
    },

    async addPet(req, res) {
        const { name, description, adopted, age, address, image } = req.body

        const shelterId = req.params['id'];
        

        const pet = await Pet.create({
            name,
            shelterId,
            description,
            adopted,
            age,
            address,
            image
        });

        res.json(pet);
    },

    async getPetById(req, res) {
        const { id } = req.params;

        const pet = await Pet.findByPk(id);

        if (!pet) {
            return res.status(404).json({ error: 'Pet not found' });
        }

        res.json(pet);
    },

    async updatePetById(req, res) {
        const { id } = req.params;
        const { name, description, adopted, age, address, image } = req.body

        const pet = await Pet.findByPk(id);

        if (!pet) {
            return res.status(404).json({ error: 'Pet not found' });
        }

        await pet.update({
            name,
            description,
            adopted,
            age,
            address,
            image
        });

        res.json(pet);
    },

    async deletePetById(req, res) {
        const { id } = req.params;

        const pet = await Pet.findByPk(id);

        if (!pet) {
            return res.status(404).json({ error: 'Pet not found' });
        }

        await pet.destroy();

        res.status(204).send();
    }

}