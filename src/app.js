const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/User");

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Sahil",
    lastName: "Divekar",
    emailId: "sahildivekar32@gmail.com",
    password: "12345678",
  };

  //Creating a new instance of the user model
  const user = new User(userObj);

  try {
    await user.save();
    res.send("User added successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

connectDB()
  .then(() => {
    console.log("DB connected successfully");
    app.listen(3000, (req, res) => {
      console.log("Server is successfully listening on port 3000");
    });
  })
  .catch(() => {
    console.log("Database cannot be connected");
  });
