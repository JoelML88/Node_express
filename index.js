// Invocación de la librería express
const express = require('express');
// Invocación de la libreria mongoose para conexión a base de datos de mongodb
const mongoose = require('mongoose');
// Importar las rutas de la colección Review
const reviewRoute = require('./routes/review.route');

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

// Endpoints de la colección Reviews
app.use('/api/reviews', reviewRoute);

// Definiendo la conexión a base de datos a través de mongoose
// La conexión a base de datos es de tipo promesa

mongoose.connect('mongodb://localhost:27017/AirBnB')
.then( () => {
    console.log('Conectado a la base de datos de manera exitosa');
    app.listen(3000, () => {
        console.log('Servidor respondiendo en el puerto 3000');
    });
})
.catch( () => console.log('Ocurrió un problema al conectar la base de datos') )

