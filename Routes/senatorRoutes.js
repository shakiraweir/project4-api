const express = require('express')
const router = express.Router()
const mongoose = require('./../Models/Senator')
const Senator = mongoose.model('Senator')


//show all senator page
router.get('/', (req, res) => {
    Senator.find().then(result => {
        res.json(result)
    })
})

//senator show one page
// router.get('/:id', (req, res) => {
//     Senator.findOne({_id: req.params.id}).then(showOne => {
//         res.json(showOne)
//     })
// })

router.get('/senator', (req, res) => {
    Senator.findOne({_id: req.params.id}).then(showOne => {
        res.json(showOne)
    })
})


module.exports = router