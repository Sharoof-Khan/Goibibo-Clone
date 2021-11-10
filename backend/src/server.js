const express = require('express');
const app = express();
const Flight = require('./modal/flight.modal')
const connect = require('./config/db')

const flightController = require('./controllers/flight.controller')


app.get("/", (req, res) => {
    res.send('hELLO sRK')
})


app.use(express.json())

app.use("/flight",flightController)

    // app.get("/flight", async(req,res)=>{
    //       const jobs = await Job.find().lean().exec();
    //      return res.status(200).send({jobs});
    //     })






app.listen(5555, async() => {
    await connect();
    console.log('Port Listing to 5555');
})