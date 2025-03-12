// Invocación de la libreria mongoose para conexión a base de datos de mongodb
const mongoose = require('mongoose');
// Importar las rutas de la colección Food
const foodRoute = require('./routes/food.route');

const express = require('express');

const PORT = process.env.PORT || 3000; // Usa el puerto asignado por Render o 3000 por defecto


// Inicialización de la aplicación basada en express
const app = express();
// Incorporando el parser de JSON
app.use( express.json() );

// Tareas CRUD y sus métodos
// C - Create (Crear, agregar) ---> post
// R - Read (Leer o recuperar) ---> get
// U - Update (Actualizar) -------> put
// D - Delete (Borar o eliminar) -> delete

// Endpoint por defecto
app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor de APIs');
});

// Endpoints de la colección Foods
app.use('/api/Foods', foodRoute);

// Definiendo la conexión a base de datos a través de mongoose
// La conexión a base de datos es de tipo promesa

mongoose.connect("mongodb+srv://JoelMLeon:JoyCuco218821@mad-adn-prod1.vwuce.mongodb.net/Food_Nutrients?retryWrites=true&w=majority&appName=MAD-ADN-PROD1&tls=true")
.then( () => {
    console.log('Conectado a la base de datos de manera exitosa');
    
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
})
.catch( (err) => console.log('Ocurrió un problema al conectar la base de datos'+err) )

