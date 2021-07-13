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


//connect to mongodb using mongoose
//it returns promise
mongoose.connect(process.env.MONGO_DB_LOCAL, {
    //configuration is required for mongodb
    useCreateIndex : true,
    useFindAndModify : false,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then((response) => {
    console.log(`Connected Succesfully to mongoDB.....`);
}).catch((err) => {
    console.error((err));
    //stop the process
    process.exit(1);
});

//accept the form data bcz you submit the form
    //accept to the express server through the request.body
//for which format
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));

//get request
app.get('/', (request, response) => {
    response.send(`Welcome to Big Basket Express Server`);
});

//configure router
app.use('/api', require('./router/bitbucketrouter'));

app.listen(port, hostname, () => {
    console.log(`Server is started at http://${hostname}:${port}`)
});
