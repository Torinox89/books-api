//DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true},  () => { 
     console.log('connected to mongo: ',
     process.env.MONGO_URI) }
    )

// MIDDLEWARE, express Settings
app.use(express.urlencoded({extended: true}))

// books
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Hello World!')
})

// Books: 
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)
  
  // LISTEN
  app.listen(PORT, () => {
    console.log('listening on port', PORT);
  })
