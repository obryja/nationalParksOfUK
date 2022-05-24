const { ObjectId } = require("bson")
const { type } = require("express/lib/response")
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const parkSchema = new Schema ({
    name: {
        type: String, 
        require: true
    },
    description: String, 
    year: Number,
    area: Number,
    website: String,
    galery: [String],
}, {
    versionKey: false
})

const Park = new mongoose.model('Park', parkSchema)

module.exports = {
    Park
}