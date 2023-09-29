const express = require("express");
const estudiantesRoutes = require('./routes/estudiantes.routes');
const login = require('./routes/login.routes');
const registro = require('./routes/registro.routes');
const dotenv = require('dotenv');

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
/*
app.use(registro);
*/
app.use(login);

app.use(estudiantesRoutes);


app.listen(process.env.PUERTO, () => {
    console.log('Servidor corriendo en puerto: ' + process.env.PUERTO);
});
