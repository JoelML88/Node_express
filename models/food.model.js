// Definiendo un objeto de tipo mongoose
const mongoose = require('mongoose');
// Definiendo la estructura del documento review

/*

*/

const ReviewSchema = mongoose.Schema(
    {
        Category: {
            type: String,
            required: true
        },
        Description: {
            type: String,
            required: true
        },
        Nutrient_Data_Bank_Number: {
            type: Number,
        },
        
        Data_Alpha_Carotene: {
            type: Number,
        },
        Data_Beta_Carotene: {
            type: Number,
        },
        Data_Beta_Cryptoxanthin: {
            type: Number,
        },
        Data_Carbohydrate: {
            type: Number,
        },
        Data_Cholesterol: {
            type: Number,
        },
        Data_Choline: {
            type: Number,
        },
        Data_Fiber: {
            type: Number,
        },
        Data_Lutein_and_Zeaxanthin: {
            type: Number,
        },
        Data_Lycopene: {
            type: Number,
        },
        Data_Niacin: {
            type: Number,
        },
        Data_Protein: {
            type: Number,
        },
        Data_Retinol: {
            type: Number,
        },
        Data_Riboflavin: {
            type: Number,
        },
        Data_Selenium: {
            type: Number,
        },
        Data_Sugar_Total: {
            type: Number,
        },
        Data_Thiamin: {
            type: Number,
        },
        Data_Water: {
            type: Number,
        },
        Data_Fat_Monosaturated_Fat: {
            type: Number,
        },
        Data_Fat_Polysaturated_Fat: {
            type: Number,
        },
        Data_Fat_Saturated_Fat: {
            type: Number,
        },
        Data_Fat_Total_Lipid: {
            type: Number,
        }

    }
)

const Review = mongoose.model('food', ReviewSchema, 'food');
module.exports = Review;