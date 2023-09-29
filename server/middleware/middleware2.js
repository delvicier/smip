const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET
const secret2 = process.env.JWT_SECRET2

const authMiddleware2 = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      let payload;
  
      try {

        payload = jwt.verify(token, secret);
      } catch (error1) {
        try {

          payload = jwt.verify(token, secret2);
        } catch (error2) {

          return res.status(401).send({ error: 'Token inválido' });
        }
      }
  
      if (Date.now() > payload.exp) {
        return res.status(401).send({ error: 'Token expired' });
      }
  
      req.userData = payload;
  
      next();
    } catch (error) {
      res.status(401).send({ error: error.message });
    }
  };
  
  module.exports = authMiddleware2;
  