const Candidate = require('../models/candidate');


module.exports = {
    async register(req, res){

        const {nome, nomeSocial, aniversario, profissao, estadoCivil, genero, pcd, cep, bairro, cidade,
            uf, logradouro, numero, complemento, phone, phone2, email, identidade, CPF, cargo,
            veiculo, habilitacao} = req.body;

        const newCandidate = new Candidate();
        
        newCandidate.nome = nome;
        newCandidate.nomeSocial = nomeSocial;
        newCandidate.aniversario = aniversario;
        newCandidate.profissao = profissao;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.genero = genero;
        newCandidate.pcd = pcd;
        newCandidate.cep = cep;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.uf = uf;
        newCandidate.logradouro = logradouro;
        newCandidate.numero = numero;
        newCandidate.complemento = complemento;
        newCandidate.phone = phone;
        newCandidate.phone2 = phone2;
        newCandidate.email = email;
        newCandidate.identidade = identidade;
        newCandidate.CPF = CPF;
        newCandidate.cargo = cargo;
        newCandidate.veiculo = veiculo;
        newCandidate.habilitacao = habilitacao;
        

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }

            return res.status(200).send(savedCandidate);
        });
    },
};