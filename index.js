const express = require('express');
const app= express();
const path= require('path');
require('dotenv').config();

//Conecta a pagina o dispositivo
const publicPacth= path.resolve( __dirname, 'public');

//Conecta todo
app.use(express.static(publicPacth));

app.listen(process.env.PORT, (err) =>{//Escucha peticiones y cacha errores
    if(err) throw new Error(err); 

    console.log('servidor corriendo en puerto',process.env.PORT );
} );