const mongoose = require('mongoose')


const connect = async() => {

    return await mongoose.connect('mongodb+srv://goibibo:Srk123@goibibo.fpuqy.mongodb.net/goibibo?retryWrites=true&w=majority')
    
    
}




module.exports= connect;
// await mongoose.connect('mongodb://localhost/my_database');