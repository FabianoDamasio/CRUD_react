const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('./models/Atividades')
const Atividades = mongoose.model('atividades')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"/*qualquer aplicação pode fazer requisição*/)
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")/*métodos permitidos*/
    app.use(cors())
    next()
})

mongoose.connect('mongodb://localhost/crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão com Mongodb realizada com sucesso')
}).catch((erro) => {
    console.log('Erro: Conexão com Mongodb não realizada com sucesso')
})

app.get('/atividade', function (req, res) {
    Atividades.find({}).then((atividade) => {
        return res.json(atividade)
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "nenhuma atividade encontrado"
        })
    })
})

app.get('/atividades/:id', (req, res) => {
    Atividades.findOne({_id:req.params.id}).then((atividades) => {
            return res.json(atividades)
        }).catch((erro) =>{
            return res.status(400).json({
                error: true,
                message: "Nenhum artigo encontrado"
            })
        })
})

app.put('/atividades/:id', (req, res) => {
    const atv = Atividades.updateOne({_id:req.params.id}, req.body, (err) => {
        if(err) return res.status(400).json ({
            error: true,
            message: "Erro ao editar"
        })

        return res.json({
            erro: false,
            message: "Editado com Sucesso"
        })
    })
})

app.post('/atividades', (req, res) => {
    const atv = Atividades.create(req.body, (err) => {
        console.log(err)
        if(err) return res.status(400).json({
            error: true,
            message: "Erro ao cadastrar",
        })

        return res.status(400).json({
            error: false,
            message: "Cadastro realizado com sucesso"
        })
    })
})

app.delete('/atividades/:id', (req, res) => {
    const atv = Atividades.deleteOne({_id: req.params.id}, (err) => {
        if(err) return res.status(400).json({
            erro: true,
            message: "Atividade não foi apagada com sucesso"
        })
        
        return res.json({
            error: false,
            message: "Apagado com sucesso"
        })
    })
})

app.listen(8080, function() {
    console.log('servidor iniciado na porta 8080: "http://localhost:8080/"')
})