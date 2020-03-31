const express = require("express");

const crypto = require("crypto");

const connection = require("../database/connection");

module.exports = {
    async index(request, response) {
        const ongs = await connection("ongs").select("*");

        return response.json(ongs);
    },
    async search(request, response) {
        const params = request.params;
        //const ongs = await connection("ongs").select("*");
        
        console.log(params.id);
        const result = await connection('ongs').select('*').where('id', params.id.toString());

        if ( typeof result  !== 'undefined' ) {
            //console.log(result[0]);
            //console.log(result[0].name);
            console.log("typeof result =>");
            console.log(typeof result[0]);
            if ( typeof result[0] === 'undefined' ){
                return response.json({ "erro1":"Dados não encontrados"});
            }else{
                return response.json(result);
            }
        }else{
            return response.json({ "erro2":"Dados não encontrados"});
        }
        
    },
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const IDNovaOng = (crypto.randomBytes(4).toString('HEX')).toUpperCase(); 
        //const IDNovaOng = 'F6A6661B';
        var id = IDNovaOng.valueOf().toUpperCase().trim();
        console.log("id Gerado:");
        console.log(id);
        
        const id_search = await connection('ongs').select('id').where('id', id).first();
        console.log("id Retornado:");
        console.log(id_search);

        if ( typeof id_search  !== 'undefined' ) { 
            // Verifica se o ID Randomico já  existe se existe  gera uma segunda  vez
            // Melhoria Futura => por em um ForEach para previnir tentativa de imclusão 
            console.log("Dado Encontrado!");
            if ( id === id_search.id ) {
                console.log("id JÁ Existe!");
                // Se o ID gerado já existe, gero um novo..
                id = (crypto.randomBytes(4).toString('HEX')).toUpperCase();
                console.log("Novo ID!");
                console.log(id);
                // Melhoria Futura => por um Try - Cath para previnir o erro na inclusão 
                await connection('ongs').insert({
                    id,
                    name,
                    email,
                    whatsapp,
                    city,
                    uf,
                });
            }else{
                console.log("id NÃO Existe!");
                await connection('ongs').insert({
                    id,
                    name,
                    email,
                    whatsapp,
                    city,
                    uf,
                });
            };
        } else {
            console.log("Dados NÃO Encontrado!");
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            });
        };


        return response.json(id);
    },
    async delete(request, response) {
        const { id } = request.params;
 
        const ong = await connection("ongs")
                               .where("id", id)
                               .select('id')
                               .first();
  
        if ( !ong ) {
            response.status(404).json({ error: "Incident not found" });
        }

        if ( ong.id !== id )
            response.status(401).json({ error: "Operation not permitted" });
        
        // Verificar se a ONG possui casos antes de deletar ela - se  tiver - Impedir a esclusão

        await connection("ongs")
            .where("id", id)
            .delete();
    
        return response.status(200).send({msg: "ONG was successfully deleted" });
    }
};