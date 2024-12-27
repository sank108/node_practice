const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://Sanket123:SEyJ4ivIKtAmaNqj@cluster0.lvn0liq.mongodb.net/devTinder"
  );
};

module.exports = connectDb;
