const jwt = require("jsonwebtoken");
function generateToken(user) {
  const payload = {
    username: user.username,
    subject: user.id,
  };
  const secret = "is it a secret?";
  const options = {
    expiresIn: "1h",
  };
  return jwt.sign(payload, secret, options);
}

module.exports = generateToken;
