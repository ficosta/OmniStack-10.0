const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()
const port = 3000

mongoose.connect('mongodb+srv://omnistack10:qCftP7LNNYkR2FwY@cluster0-knsrs.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json()) //Forma de avisar o node/express para utilizar Json nos req e res
app.use(routes);


//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros
//Query Params req.query 
//(filtro, ordenação, paginação) /users?search=Felipe

//Route Params req.params
//(identificar recurso na alteração ou remoção) /user/123   = /user/:id

//Body request.body (dados para criação ou alteração de registros)

app.listen(port, () => console.log(`App rodando na porta ${port}`))