const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET

const authMiddleware = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const payload = jwt.verify(token, secret);
  
      if (Date.now() > payload.exp) {
        return res.status(401).send({ error: 'Token expired' });
      }
  
      // Agrega el payload del token a req.userData para su uso en las rutas protegidas
      req.userData = payload;
  
      // Continuar con la solicitud si el token es válido
      next();
    } catch (error) {
      res.status(401).send({ error: error.message });
    }
  };

module.exports = authMiddleware;