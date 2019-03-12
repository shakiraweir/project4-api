const express = require('express')
const router = express.Router()
const mongoose = require('./../Models/Senator')
const Senator = mongoose.model('Senator')


//show all senator page
router.get('/show', (req, res) => {
    Senator.find().then(senator => {
        res.json(senator)
    })
})

//senator show one page
router.get('/:id', (req, res) => {
    Senator.findOne({_id: req.params.id}).then(showOne => {
        res.json(showOne)
    })
})

module.exports = router