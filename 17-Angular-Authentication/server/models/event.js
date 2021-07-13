const mongoose = require('mongoose');

let EventSchema = new mongoose.Schema({
  name : {
    type : String
  },
  image : {
    type : String
  },
  price : {
    type : Number
  },
  info : {
    type : String
  },
  date : {
    type : String
  },
  type : {
    type : String
  },
  created : {
    type : Date,
    default : Date.now
  }
});


let Event = mongoose.model('event', EventSchema);
module.exports = Event;
