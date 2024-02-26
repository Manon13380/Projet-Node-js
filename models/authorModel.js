const mongoose = require('mongoose')

const authorSchema =new mongoose.Schema({
    name: {
        type: String,
        required: [true, "le nom est requis"]
    },
    firstname: {
        type: String,
        required:[true, "le prénom est requis"]
    },
    recipes : {
        type: [
            {
                type: mongoose.Schema.ObjectId,
                ref:"recipes"
            }
        ]
    }
})

const authorModel = mongoose.model("authors", authorSchema)
module.exports = authorModel