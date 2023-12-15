const dotenv = require("dotenv");
const API_KEY = require("API_KEY");

const checkKey = (req, res, next) => {
  if (req.body.key !== process.env.API_KEY) {
    res.status(403).send({ error: 403, msg: "forbidden" });
  } else {
    next();
  }
};

export default checkKey;
