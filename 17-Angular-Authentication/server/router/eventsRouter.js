const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const authenticate = require('../middlewares/authenticate');

/*
  USAGE : GET all the FREE Events
  URL : http://127.0.0.1:5000/events/free
  METHOD : GET
  FIELDS : no-fields
*/
router.get('/free', async (req, res) => {
  try {
    let freeEvents = await Event.find({type:'FREE'});
    res.status(200).json(freeEvents)
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      msg : err.message
    });
  }
});

/*
  USAGE : GET all the PRO Events
  URL : http://127.0.0.1:5000/events/pro
  METHOD : GET
  FIELDS : no-fields
*/
router.get('/pro', authenticate, async (req, res) => {
  try {
    let proEvents = await Event.find({type:'PRO'});
    res.status(200).json(proEvents)
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      msg : err.message
    });
  }
});


/*
  USAGE : UPLOAD Events
  URL : http://127.0.0.1:5000/events/upload
  METHOD : POST
  FIELDS : name, image, date, price, info, type
*/
router.post('/upload', async (req, res) => {
  try {
    /*
    //destructuring concept
    let {name, image, date, price, info, type} = req.body;
    //insert into database
    let event = new Event({name, image, date, price, info, type});
    */

    let newEvent = {
      name : req.body.name,
      image : req.body.image,
      date : req.body.date,
     /* price : req.body.price,*/
      info : req.body.info,
      type : req.body.type,
    };

    //get the price based on the event type
    newEvent.price = (req.body.type === 'FREE') ? 0 : req.body.price;

    //insert into database
    let event = new Event(newEvent);
    event = await event.save(); //insert a record to database
    res.status(200).json({
      result : 'Upload Success',
      event : event
    });
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      msg : err.message
    });
  }
});






module.exports = router;
