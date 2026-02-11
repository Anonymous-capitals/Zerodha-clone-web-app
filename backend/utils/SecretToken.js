const jwt = require("jsonwebtoken");

const createSecretToken = (userId) => {
  const secretKey = process.env.JWT_SECRET || "secret_key";
  
  const token = jwt.sign({ id: userId }, secretKey, {
    expiresIn: "7d", 
  });
  
  return token;
};

module.exports = { createSecretToken };