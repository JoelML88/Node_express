const mongoose = require('mongoose');
const foodRoute = require('./routes/food.route');

const express = require('express');
const http = require('http'); // <-- Importación importante

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor de APIs');
});

app.use('/api/Foods', foodRoute);

mongoose.connect("mongodb+srv://JoelMLeon:JoyCuco218821@mad-adn-prod1.vwuce.mongodb.net/Food_Nutrients?retryWrites=true&w=majority&appName=MAD-ADN-PROD1&tls=true")
.then(() => {
    console.log('Conectado a la base de datos de manera exitosa');

    const server = http.createServer(app); // <-- Aquí usamos http directamente
    server.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT} con HTTP/1.1`);
    });
})
.catch((err) => console.log('Ocurrió un problema al conectar la base de datos: ' + err));
