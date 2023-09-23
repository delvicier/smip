const express = require("express");
const estudiantesRoutes = require('./routes/estudiantes.routes');
const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");

dotenv.config();
const app = express();

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true); 
  next()
});

app.use(express.json());

const secret = process.env.JWT_SECRET

app.post("/login", (req, res) => {
  const {id:name,pass} = {name: "1", pass: "2"}

  const token = jwt.sign({
    name,
    pass,
    exp: Date.now() + 3600 * 1000
  }, secret)
  res.send({token})
})

app.use(estudiantesRoutes);

app.listen(process.env.PUERTO, () => {
    console.log('Servidor corriendo en puerto: ' + process.env.PUERTO);
});
