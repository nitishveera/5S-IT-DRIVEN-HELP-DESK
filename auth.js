const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect("/helpdesk/login");
  }

  try {
    const decoded = jwt.verify(token, "secretKey");
    req.user = decoded; // Attach the user data to the request
    next();
  } catch (error) {
    return res.redirect("/helpdesk/login");
  }
};

module.exports = authenticateUser;
