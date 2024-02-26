const recipeModel = require("../models/recipeModel")
const authorModel = require("../models/authorModel")

exports.postRecipe = async (req, res) => {
    try {
        const author = authorModel.findOne({ _id: req.params.idAuthor })
        if (author) {
            const newRecipe = new recipeModel(req.body)
            newRecipe.validateSync();
            await newRecipe.save()
            await authorModel.updateOne({ _id: req.params.idAuthor }, { $push: { recipes: newRecipe._id } })
            res.json("Votre recette a bien été créée")
        }

    } catch (error) {
        res.json(error.message)
    }
}

exports.getRecipes = async (req, res) => {
    try {
        let recipes = null
        if (req.query.name) {
            recipes = await recipeModel.find({ name: req.query.name })
        }
        else if (req.query.ingredient) {
            recipes = await recipeModel.find({ ingredient: req.query.ingredient })
        }
        else if (req.query.category) {
            recipes = await recipeModel.find({ category: req.query.category })
        }
        else { recipes = await recipeModel.find(); }
        res.json(recipes)
    } catch (error) {
        res.json(error.message)
    }
}

exports.getOneRecipe = async (req, res) => {
    try {
        const recipes = await recipeModel.findOne({ _id: req.params.id })
        res.json(recipes)
    } catch (error) {
        res.json(error.message)
    }
}

exports.deleteRecipe = async (req, res) => {
    try {
        const author = authorModel.findOne({ _id: req.params.idAuthor })
        if (author) {
            const recipesDeleted = await recipeModel.deleteOne({ _id: req.params.idRecipe })
            await authorModel.updateOne({ _id: req.params.idAuthors }, { $pull: { recipes: req.params.idRecipe } })
            res.json(recipesDeleted)
        }
    } catch (error) {
        res.json(error.message)
    }
}

exports.updateRecipe = async (req, res) => {
    try {
        const recipesUpdated = await recipeModel.updateOne({ _id: req.params.id }, req.body)
        res.json(recipesUpdated)
    } catch (error) {
        res.json(error.message)
    }
}

