// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 


// schema
const bookSchema = new Schema({
//data {}
})


// helper methods 
bookSchema.methods.nameMethod = function(){
  
}

  
// model and export 
const Book = mongoose.model('Book', bookSchema)
module.exports = Book