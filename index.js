const express = require('express');
//Servidor de express compatible con sockets
const app= express();
//Esto lee el .env
const path= require('path');
require('dotenv').config();

//Crear servidor de sockets how to use
const server = require('http').createServer(app);
//Se manda el io
module.exports.io = require('socket.io')(server);
//extrae la otra parte del código
require('./Sockets/socket');


//Conecta a pagina o dispositivo
const publicPacth= path.resolve( __dirname, 'public');

//Conecta todo
app.use(express.static(publicPacth));

server.listen(process.env.PORT, (err) =>{//Escucha peticiones y cacha errores
    if(err) throw new Error(err); 

    console.log('servidor corriendo en puerto',process.env.PORT );
} ); 