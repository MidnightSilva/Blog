const mongoose = require('mongoose')
// ***********************************************//
// adding categories to the schema 
// ***********************************************//
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  date: { type: Date,
     default: Date.now },
});


module.exports = mongoose.model('Posts',PostSchema)
// module.export = mongoose.model ('Posts', PostSchema)