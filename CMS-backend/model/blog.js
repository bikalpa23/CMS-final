const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true
    },
    subTitle: {
        type: String
    },
    description: {
        type: String
    }
}, {
    timestamps: true //Time tyo Blog Haleko
})

const Blog = mongoose.model("Blog",blogSchema)
module.exports = Blog