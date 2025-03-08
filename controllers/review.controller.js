const Review = require('../models/review.model');

// Función para recuperar la colección de Reviews
const getReviews = async(req, res) => {
    try {
        const Reviews = await Review.find({});
        res.status(200).json(Reviews);
    } catch (error) {
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}

// Función para recuperar un elemento de la colección con base en el _id
const getReviewById = async(req, res) => {
    try {
        // id proviene de una variable en la URL
        const { id } = req.params;
        const Reviews = await Review.find({'_id': id});
        res.status(200).json(Reviews);
    } catch (error) {
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}

// Función que agrega un elemento a la colección
const setReview = async(req, res) => {
    try {
        const SimpleReview = await Review.create( req.body );
        res.status(200).json(SimpleReview);
    } catch (error) {
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}

// Función para actualizar un elemento de la colección usando su _id
const updateReview = async(req, res) => {
    try {
        const { id } = req.params;
        const UpdatedReview = await Review.findByIdAndUpdate(id, req.body );
        if (!UpdatedReview) {
            return res.status(400).json({
                status: "error",
                message: "Document not found"
            });
        }
        const Reviews = await Review.find({'_id': id});
        res.status(200).json(Reviews);
    } catch (error) {
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}

// Función para eliminar un elemento de la colección con base en el _id
const deleteReviewById = async(req, res) => {
    try {
        // id proviene de una variable en la URL
        const { id } = req.params;
        const Reviews = Review.find({ '_id':id });
        if (!Reviews) {
            res.status(400).json({
                message: "Document not found"
            });
        }
        const deletedReview = await Review.deleteOne({'_id': id});
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
    getReviews,
    getReviewById,
    setReview,
    updateReview,
    deleteReviewById
}