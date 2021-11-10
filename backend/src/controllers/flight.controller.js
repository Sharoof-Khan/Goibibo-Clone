const express = require('express');
const router = express.Router();
const Flight = require('../modal/flight.modal')

router.post('', async (req, res) => {
    const flight = await Flight.create(req.body)

    return res.status(201).send({flight})
})

router.get("", async (req, res) => {
    const flight = await Flight.find().lean().exec();
    return res.status(200).send({flight})
})



// exports.module = router;
module.exports = router;
