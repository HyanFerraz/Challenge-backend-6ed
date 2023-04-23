const Adoption = require('../models/Adoption');
const Pet = require('../models/Pet');


module.exports = {
    async store(req, res) {
    
        const { petId, tutorId } = req.body;

        const pet = Pet.findByPk(petId)

        if(!pet['adopted']) {
            (await pet).update({
                adopted: true
            });
        } else {
            res.json({'Pet' : 'Already adopted'})
        }

        const adopt = await Adoption.create({
            petId,
            tutorId,
        });
        
        res.json(adopt)
    },

    async delete(req, res) {
        const { adoptionId } = req.params;

        const adoption = await Adoption.findByPk(adoptionId);

        if (!adoption) {
            return res.status(404).json({ error: 'Adoption not found' });
        }

        await adoption.destroy();

        res.status(204).send();
    }
}