const express = require("express");

const crypto = require("crypto");

const connection = require("../database/connection");

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs').select('name').where('id', id).first();

        if ( !ong ) {
            return response.status(400).json({ "ProfileController-Erro":"Dados não encontrados"});
        }else{
            
        }
        
        return response.json(ong);
    }
};