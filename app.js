const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require("./models/User")
const passport = require('passport');


mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) =>{ 
// const user = new User({
//   handle:"mike",
//   email:"mike@mike.com",
//   password: "123456"
//   })
//   user.save()
  res.send("Wut?")
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/tweets", tweets);

app.use(passport.initialize());
require('./config/passport')(passport);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));