const express = require("express");
const crypto = require("crypto");

//const connection = require("./database/connection");
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routers = express.Router();

routers.post('/sessions', SessionController.create);

routers.get('/profile', ProfileController.index);

routers.post('/ongs', OngController.create);
routers.get('/ongs', OngController.index);
routers.get('/ongs/:id', OngController.search);
routers.delete('/ongs/:id', OngController.delete);

routers.get('/incidents', IncidentController.index);
routers.post('/incidents', IncidentController.create);
routers.delete('/incidents/:id', IncidentController.delete);

/*
routers.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
});
*/

/*
routers.post('/ongs', async (request, response) => {
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
        console.log("Dado Encontrado!");
        if ( id === id_search.id ) {
            console.log("id JÁ Existe!");
            // Se o ID gerado já existe, gero um novo..
            id = (crypto.randomBytes(4).toString('HEX')).toUpperCase();
            console.log("Novo ID!");
            console.log(id);
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
});*/

module.exports = routers;