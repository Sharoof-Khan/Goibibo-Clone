const mongoose = require('mongoose')


const connect = () => {

    return mongoose.connect('')
    
}

await mongoose.connect('mongodb://localhost/my_database');