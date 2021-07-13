const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const authenticate = require('../middlewares/authenticate');

/*
  USAGE : Register a User
  URL : http://127.0.0.1:5000/users/register
  METHOD : POST
  FIELDS : name, emil, password
*/

router.post('/register', async (req, res) => {
  try {

    //destructuring concept
    let {name, email, password} = req.body;

    //user already exists with same emailID
    let user = await User.findOne({email : email});
    if (user){
      return res.status(401).json({
        msg : 'Email Already Exists'
      })
    }

    //encode the password
    let salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);


    //get gravatar of a person
    let image = gravatar.url(email, {
      s : '400',
      r : 'pg',
      d : 'mm'
    });


    //insert the record
    user = new User({name, email, password, image});
    await user.save(); //insert a user into database
    res.status(200).json({
      result : 'Registration is Success',
      user : user
    });

  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      msg : err.message
    });
  }
});


/*
  USAGE : Login a User
  URL : http://127.0.0.1:5000/users/login
  METHOD : POST
  FIELDS : emil, password
*/
router.post('/login', async (req, res) => {
  try {

    //destructuring concept
    let {email, password} = req.body;

    //check email is exists
    let user = await User.findOne({email : email});
    if (!user){
      return res.status(401).json({
        msg : 'Invalid Credentials'
      });
    }

    //match the password with db encoded password
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch){
      return res.status(401).json({
        msg : 'Invalid Credentials'
      });
    }

    //generate a token
    let payload = {
      user : {
        id : user.id,
        name : user.name
      }
    };
    jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: 3600000}, (err, token) => {
      if (err) throw err;
      res.status(200).json({
        result : 'Login Success',
        token : token
      })
    })

  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      msg : err.message
    });
  }
});



/*
  USAGE : get a user info
  URL : http://127.0.0.1:5000/users/
  METHOD : GET
  FIELDS : no-fields
  TYPE : Private
*/
router.get('/',async (req, res) => {

  try {
    let user = await User.findById(req.user.id).select('-password');
    res.status(200).json(user);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      msg : err.message
    });
  }



});


module.exports = router;
