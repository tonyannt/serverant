// Se recibe el io
const{ io } =require('../index');

//Mensajes de Sockets client: computadora recien conectada

io.on('connection', client => {
    console.log('cliente conectado');

    client.on('mensaje', (payload) => {
        console.log('Listen', payload);
        io.emit('mensaje', { admin: 'Nuevo mensaje' });
    });

    client.on('disconnect', () => { 
        console.log('Cliente desconectado');
     });
    
  });