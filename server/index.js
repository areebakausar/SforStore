/**
 * Entry Point into our MERN Program server
 * 
 */

 // Step 1:
// npm installed express, this imports express module to 
// const express and creates express application
const express = require("express");
const app = express();

// import mongoose package which allow easier connection to mongodb
const mongoose = require("mongoose");

const path = require("path");
const cors = require('cors')

// import these npm packages to establish server client communication
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

// Step 2
// pass the URI from config file to imported mongoose package and connect database
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('Database Successfully Connected'))
  .catch(err => console.log(err));

app.use(cors());

//Step 4
// Allows us to use query strings and make 
// http requests in url body
app.use(bodyParser.json());
// this will use a cookie token and send it with request url
// to tell server that whether request is coming from a logged in user
app.use(cookieParser());


app.use('/api/users', require('./routes/users'));
app.use('/api/product', require('./routes/product'));
app.use('/uploads', express.static('uploads'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});