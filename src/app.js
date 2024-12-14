const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello from the server-1"); // this function is known as request handler
});

app.listen(3000, (req, res) => {
  console.log("Server is successfully listening on port 3000");
});
