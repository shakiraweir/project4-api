const express = require('express')
const router = express.Router()
const mongoose = require('./../Models/Representative')
const Representative = mongoose.model('Representative')


//show all representative page
router.get('/', (req, res) => {
    Representative.find().then(result => {
        res.json(result)
    })
})

//representative show one page
router.get('/:id', (req, res) => {
    Representative.findOne({_id: req.params.id}).then(showOne => {
        res.json(showOne)
    })
})

module.exports = router