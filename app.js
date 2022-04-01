const mongoose = require('mongoose');

const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

  
const port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("I am the js app server message :)"));
app.listen(port, () => console.log(`Server is running on port ${port}`));