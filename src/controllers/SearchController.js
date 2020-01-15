const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')
module.exports = {
    async index(req, res) {
        //Buscar todos os devs em um raio de 10km
        //Filtrar por tech
        const { latitude, longitude, techs } = req.query
        const techsArray = parseStringAsArray(techs)

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                        //coordinates: [-46.7275977,-23.6059692],
                    },
                    $maxDistance: 10000,
                },
            },
        })

        return res.json({ devs })
    }
}