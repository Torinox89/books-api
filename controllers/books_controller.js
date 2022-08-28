const router = require('express').Router()
const db = require('../models')
const Books = require('../models/book.js')

//INDEX ROUTE
router.get('/', (req, res) => {
  res.send('GET /books stub')
})

//POST
router.post('/', (req, res) => {
  res.send('POST /books stub')
})

//NEW
router.get('/new', (req, res) => {
  res.render('books/new')
})

//SHOW PAGE AND LINKS
router.get('/:id', (req, res) => {
  res.send('GET /books/:id stub')
})

//PUT
router.put('/:id', (req, res) => {
  res.send('PUT /books/:id stub')
})

//DELETE
router.delete('/:id', (req, res) => {
  res.send('DELETE /books/:id stub')
})

//EDIT
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})



module.exports = router



