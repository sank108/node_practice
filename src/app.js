const express = require("express");

const app = express();

app.use("/users", (req, res) => {
  res.send("Haahahha");
});

app.get("/users", (req, res) => {
  res.send("This will only match the get method");
});

app.post("/users", (req, res) => {
  res.send("Send data to the data base");
});

app.delete("/users", (req, res) => {
  res.send("User has been successfully deleted");
});

//All the below routes will match all the HTTP method API calls
// app.use("/", (req, res) => {
//   res.send("Base Route");
// });

app.use("/home", (req, res) => {
  res.send("Hello from home");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server-1"); // this function is known as request handler
});

app.listen(3000, (req, res) => {
  console.log("Server is successfully listening on port 3000");
});
