const mongoose = require("mongoose");


// Importo somente o Schema (esquema de como os dados serão armezenados)
const Schema = mongoose.Schema;

// Crio o esquema para Tarefa
const Tarefa = new Schema({
    titulo: String,
    descricao: String
}, { 
    versionKey: '_somethingElse' 
});

// Exporta para usar em routes
module.exports = mongoose.model("Tarefa", Tarefa);