const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/*const hostname = '127.0.0.1';
const port = 5000;*/


//configure cors
app.use(cors());

//configure dotenv
dotenv.config({path: './config/config.env'});

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;




//accept the form data bcz you submit the form
    //accept to the express server through the request.body
//for which format
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//get request
app.get('/', (request, response) => {
    response.send(`Welcome to Form Validation Express Server`);
});

//configure router
app.use('/user', require('./router/userRouter'));

app.listen(port, hostname, () => {
    console.log(`Server is started at http://${hostname}:${port}`)
});
