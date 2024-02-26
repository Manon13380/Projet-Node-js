const authorModel = require("../models/authorModel")

exports.postAuthor = async (req, res)=> {
   try {
    const newAuthor = new authorModel(req.body)
    newAuthor.validateSync()
    await newAuthor.save()
    res.json("L'auteur a bien été créé")
   } catch (error) {
    res.json(error.message)
   }
}

exports.getAuthors = async (req, res)=> {
    try {
        const authors = await authorModel.find().populate("recipes")
        res.json(authors)
    } catch (error) {
        res.json(error.message)
    }
}

exports.getOneAuthor = async (req, res)=>{
    try {
        const author = await authorModel.findOne({ _id: req.params.id }).populate("recipes")
        res.json(author)
    } catch (error) {
        res.json(error.message)
    }
}
exports.deleteAuthor = async (req, res) => {
    try {
        const authorDeleted = await authorModel.deleteOne({ _id: req.params.id })
        res.json(authorDeleted)
    } catch (error) {
        res.json(error.message)
    }
}

exports.updateAuthor = async (req, res) => {
    try {
        const authorsUpdated = await authorModel.updateOne({ _id: req.params.id }, req.body)
        res.json(authorsUpdated)
    } catch (error) {
        res.json(error.message)
    }
}