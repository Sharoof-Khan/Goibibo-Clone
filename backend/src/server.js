const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send('hELLO sRK')
})





app.listen(5555, () => {
    console.log('Port Listing to 5555');
})