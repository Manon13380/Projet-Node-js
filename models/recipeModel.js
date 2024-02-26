const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Le nom est requis"]
    },
    ingredient: {
        type: Array,
        required: [true, "Les ingrédients sont requis"]
    },
    preparationTime: {
        type: Number,
        required: [true, "le temps de préparation est requis"]
    },
    cookingTime: {
        type: Number,
        required: [true, "le temps de cuisson est requis"]
    },
    instruction: {
        type: String,
        required: [true, "les étapes sont requises"]
    },
    difficult: {
        type: String,
    },
    category: {
        type: String,
        required: [true, "la catégorie est requise"]
    }
})

const recipeModel = mongoose.model("recipes", recipeSchema);
module.exports = recipeModel;