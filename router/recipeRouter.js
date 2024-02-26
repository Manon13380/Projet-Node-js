const recipeRouter = require("express").Router()
const recipeController = require ('../controllers/recipeController')

recipeRouter.post('/authors/:idAuthor/recipes/', recipeController.postRecipe)
recipeRouter.get('/recipes', recipeController.getRecipes)
recipeRouter.get('/recipes/:id', recipeController.getOneRecipe)
recipeRouter.delete('/authors/:idAuthor/recipes/:idRecipe', recipeController.deleteRecipe)
recipeRouter.put('/recipes/:id', recipeController.updateRecipe)
module.exports = recipeRouter