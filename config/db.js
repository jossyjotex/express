const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI
const connect = async()=>{
    try{
        await mongoose.connect('')
        console.log('mongoDb connected successfully');
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = connect
