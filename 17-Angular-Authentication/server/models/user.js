const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  name : {
    type : String
  },
  email : {
    type : String
  },
  password : {
    type : String
  },
  isAdmin : {
    type : Boolean,
    default : false
  },
  image : {
    type : String
  },
  created : {
    type : Date,
    default : Date.now
  }
});


let User = mongoose.model('user', UserSchema);
module.exports = User;
