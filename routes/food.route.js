const express = require('express');
const router = express.Router();
const {
    getFoods,
    getFoodById,
    setFood,
    updateFood,
    deleteFoodById
} = require('../controllers/food.controller');

// Endpoint para recuperar toda la colección de Foods
router.get('/all', getFoods);
// Endpoint para recuperar un elemento de la colección Food
router.get('/ById/:id', getFoodById);
// Endpoint para agregar un nuevo elemento a la coleeción Foods
router.post('/add', setFood);
// Endpoint para la actualización de un elemento de la colección Foods
router.put('/modify/:id', updateFood);
// Endpoint para la eliminación de un elemento de la colección Food
router.delete('/less/:id', deleteFoodById);

module.exports = router;


