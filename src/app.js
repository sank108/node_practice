const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");

const app = express();

// app.use("/users", (req, res) => {
//   res.send("Haahahha");
// });

// app.get("/users/:id", (req, res) => {
//   console.log(req.params);

//   res.send("This will only match the get method");
// });

// app.post("/users", (req, res) => {
//   res.send("Send data to the data base");
// });

// app.delete("/users", (req, res) => {
//   res.send("User has been successfully deleted");
// });

//All the below routes will match all the HTTP method API calls
// app.use("/", (req, res) => {
//   res.send("Base Route");
// });

// app.use("/home", (req, res) => {
//   res.send("Hello from home");
// });

// app.use("/test", (req, res) => {
//   res.send("Hello from the server-1"); // this function is known as request handler
// });

// app.use(
//   "/user",
//   (req, res) => {
//     res.send("1st");
//   },
//   (req, res) => {
//     res.send("2nd");
//   }
// );

app.use("/admin", adminAuth, (req, res) => {
  console.log("Get All Data");
});

app.use("/user", userAuth, () => {
  console.log("Get All user data");
});

app.use("/admin/getAll", (req, res) => {
  res.send("all Data");
});

app.listen(3000, (req, res) => {
  console.log("Server is successfully listening on port 3000");
});
