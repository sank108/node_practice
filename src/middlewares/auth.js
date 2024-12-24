const adminAuth = (req, res, next) => {
  const token = "xyz";
  const authToken = token === "xyz";

  if (authToken) {
    next();
  } else {
    res.status(401).send("Unauthorized request");
  }
};

const userAuth = (req, res, next) => {
  const token = "Sanket";
  const userToken = token === "Sanket";

  if (userAuth) {
    next();
  } else {
    res.status(401).send("User Invalid");
  }
};

module.exports = { adminAuth, userAuth };
