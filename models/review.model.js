// Definiendo un objeto de tipo mongoose
const mongoose = require('mongoose');
// Definiendo la estructura del documento review
const ReviewSchema = mongoose.Schema(
    {
        listing_url: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        sumary: {
            type: String,
        },
    }
)

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;