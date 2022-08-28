const express = require('express')
const books = express.Router()
const Book = require('../models/book.js')

// Index
books.get('/:title', (req, res) => {
  Book.findOne({ title: req.params.title .toLowerCase() })
      .then(foundBook => {
          res.json(foundBook)
      })
})

// Show
books.get('/', (req, res) => {
  Books.find()
      .then(foundBooks => {
          res.json(foundBooks)
      })
})

module.exports = books



