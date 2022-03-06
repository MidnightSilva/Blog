const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    fristName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        require: false
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    }

})
module.exports = mongoose.model('Users', UserSchema)