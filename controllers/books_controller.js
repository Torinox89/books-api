const router = require('express').Router()
const db = require('../models')
const Books = require('../models/book.js')

//INDEX ROUTE
router.get('/', (req, res) => {
  res.send('GET /places stub')
})

//POST
router.post('/', (req, res) => {
  res.send('POST /places stub')
})

//NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

//SHOW PAGE AND LINKS
router.get('/:id', (req, res) => {
  res.send('GET /places/:id stub')
})

//PUT
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

//DELETE
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

//EDIT
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router



