const { Router } = require('express')

const routes = Router()

routes.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

routes.post('/devs', (req, res) => {
    const { github_username } = req.body

    return res.json({message: 'Hello User'})
})

module.exports = routes;