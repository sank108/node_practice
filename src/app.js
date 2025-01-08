const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/User");

app.use(express.json());

app.post("/signup", async (req, res) => {
  //Creating a new instance of the user model
  console.log(req.body);
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//Get User by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    // const user = await User.find({ emailId: userEmail });
    // if (user.length === 0) {
    //   res.status(404).send("User not found");
    // } else {
    //   res.send(user);
    // }

    const user = await User.findOne({ emailId: userEmail });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(400).send("Cannot find the email");
  }
});

//Feed API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send("Cannot find the email");
  }
});

app.get("/userById", async (req, res) => {
  const id = req.body.id;

  try {
    const user = await User.findById(id);
    if (user) {
      res.send(user);
    }
  } catch (error) {
    console.log(error);
  }
});

//delete an user from the database
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted successfully");
  } catch (error) {
    console.log(error);
  }
});

//update an user from the database
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];

    const isUpdateAllowed = Object.keys(data).every((key) =>
      ALLOWED_UPDATES.includes(key)
    );

    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }

    if (data?.skills?.length > 10) {
      throw new Error("Skills cannot be more than ten");
    }
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "before",
      runValidators: true,
    });
    console.log(user);

    res.send("User updated successfully");
  } catch (error) {
    res.status(400).send("Update Failed!" + error);
  }
});

//update using email id
app.patch("/userbyemailid", async (req, res) => {
  const emailId = req.body.emailId;
  const data = req.body;

  try {
    const user = await User.findOneAndUpdate({ emailId: emailId }, data);
    res.send("User updated successfully");
  } catch (error) {
    res.status(400).send("Something Went Wrong!");
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
