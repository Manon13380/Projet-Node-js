const authorRouter = require("express").Router()
const authorController = require ("../controllers/authorController")

authorRouter.post('/author', authorController.postAuthor)
authorRouter.get ('/authors', authorController.getAuthors)
authorRouter.get('/authors/:id', authorController.getOneAuthor)
authorRouter.delete('/authors/:id', authorController.deleteAuthor)
authorRouter.put('/authors/:id', authorController.updateAuthor)
module.exports = authorRouter