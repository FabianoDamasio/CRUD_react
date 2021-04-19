const mongoose = require('mongoose')

const Atividades = new mongoose.Schema({
    nome: {
        type: String,
        maxLength: 25,
        required: true
    },

    tipodeatividade: {
        type: String,
        required: true
    },

    prioridade: {
        type: String,
        required: true
    },

    data: {
        type: String,
        required: true
    },

    descricao: {
        type: String,
        maxLength: 120,
    },
},
{
    timestamps: true,
}
)

mongoose.model('atividades', Atividades);