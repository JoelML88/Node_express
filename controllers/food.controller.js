const Food = require('../models/food.model');

// Función para recuperar la colección de Comida
const getFoods = async(req, res) => {
    try {
        const Foods = await Food.find({}).limit(20);
        res.status(200).json(Foods);
    } catch (error) {
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}

// Función para recuperar un elemento de la colección con base en el _id
const getFoodById = async(req, res) => {
    try {
        // id proviene de una variable en la URL
        const { id } = req.params;
        const Foods = await Food.find({'_id': id});
        res.status(200).json(Foods);
    } catch (error) {
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}

// Función que agrega un elemento a la colección
const setFood = async(req, res) => {
    try {
        const SimpleFood = await Food.create( req.body );
        res.status(200).json(SimpleFood);
    } catch (error) {
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}

// Función para actualizar un elemento de la colección usando su _id
const updateFood = async(req, res) => {
    try {
        const { id } = req.params;
        const UpdatedFood = await Food.findByIdAndUpdate(id, req.body );
        if (!UpdatedFood) {
            return res.status(400).json({
                status: "error",
                message: "Document not found"
            });
        }
        const Foods = await Food.find({'_id': id});
        res.status(200).json(Foods);
    } catch (error) {
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}

// Función para eliminar un elemento de la colección con base en el _id
const deleteFoodById = async(req, res) => {
    try {
        // id proviene de una variable en la URL
        const { id } = req.params;
        const Foods = Food.find({ '_id':id });
        if (!Foods) {
            res.status(400).json({
                message: "Document not found"
            });
        }
        const deletedFood = await Food.deleteOne({'_id': id});
        res.status(200).json({
            message: "Document deleted"
        });
    } catch (error) {
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}

module.exports = {
    getFoods,
    getFoodById,
    setFood,
    updateFood,
    deleteFoodById
}