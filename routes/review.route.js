const express = require('express');
const router = express.Router();
const {
    getReviews,
    getReviewById,
    setReview,
    updateReview,
    deleteReviewById
} = require('../controllers/review.controller');

// Endpoint para recuperar toda la colección de Reviews
router.get('/all', getReviews);
// Endpoint para recuperar un elemento de la colección Review
router.get('/ById/:id', getReviewById);
// Endpoint para agregar un nuevo elemento a la coleeción Reviews
router.post('/add', setReview);
// Endpoint para la actualización de un elemento de la colección Reviews
router.put('/modify/:id', updateReview);
// Endpoint para la eliminación de un elemento de la colección Review
router.delete('/less/:id', deleteReviewById);

module.exports = router;


