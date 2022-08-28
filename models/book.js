// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 


// schema
const bookSchema = new Schema({
    title: { type: String,  required: true},
    description: String,
    quantity: Number,
    imageURL: "/assets/shinobi-initiative.jpeg"
  })
  
// model and export 
const Book = mongoose.model('Book', bookSchema)
module.exports = Book