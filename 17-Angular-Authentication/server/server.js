const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');


//config cors
app.use(cors());


// configure dotenv
dotenv.config({path: './config/config.env'});


//config form data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;


app.get('/', (req, res) => {
  res.send(`<h2>Welcome to Express Server For Authentication</h2>`)
});


//connect to mongodb database
//it returns a promise so we write then
//you have to specify some options

mongoose.connect(process.env.MONGO_DB_LOCAL_URL, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser : true,
  useUnifiedTopology : true
}).then((response) => {
  console.log('Connected to MONGODB Sussessfully.....')
}).catch((err) => {
  console.log(err);
  //stop the node js process, if unable to connect to mongoDB
  process.exit(1);
});


//config routing
app.use('/events', require('./router/eventsRouter'));
app.use('/users', require('./router/userRouter'));


app.listen(port, hostname, () => {
  console.log(`Server is started at http://${hostname}:${port}`)
});
