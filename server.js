const express = require('express');
const mongoose = require('mongoose');
const recipeRouter = require("./router/recipeRouter")
const authorRouter = require("./router/authorRouter")
const app = express();

app.use(express.json())
app.use(recipeRouter)
app.use(authorRouter)

app.listen(3000, (err) => {
    if (!err) { console.log("connecté au serveur") }
    else { console.log(err); }
})

mongoose.connect("mongodb://localhost:27017/apiRecipe")

