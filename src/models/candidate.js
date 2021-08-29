const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    nomeSocial: { type: String, unique: false, required: false },
    aniversario: { type: String, unique: false, required: true },
    profissao: { type: String, unique: false, required: true },
    estadoCivil: { type: String, unique: false, required: true },
    genero: { type: String, unique: false, required: true },
    pcd: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    uf: { type: String, unique: false, required: true },
    logradouro: { type: String, unique: false, required: true },
    numero: { type: String, unique: false, required: true },
    complemento: { type: String, unique: false, required: false },
    phone: { type: String, unique: false, required: true },
    phone2: { type: String, unique: false, required: false },
    email: { type: String, unique: true, required: true },
    identidade: { type: String, unique: false, required: true },
    CPF: { type: String, unique: true, required: true },
    cargo: { type: String, unique: false, required: true },
    veiculo: { type: String, unique: false, required: true },
    habilitacao: { type: String, unique: false, required: true },

}, {
    timestamps: true
});
module.exports = mongoose.model('Candidate', CandidateSchema);