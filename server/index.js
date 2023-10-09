const express = require("express");
const estudiantesRoutes = require('./routes/estudiantes.routes');
const login = require('./routes/login.routes');
const registro = require('./routes/registro.routes');
const dotenv = require('dotenv');
const os = require('os');
dotenv.config();
const commander = require('commander');

const app = express();

commander
  .option('--host [host]', '0.0.0.0')
  .parse(process.argv);

// Accede al valor del argumento --host
const host = commander.host;


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

app.get('/direccion', (req, res) => {
  const networkInterfaces = os.networkInterfaces();
  let ipv4Address;

  for (const key in networkInterfaces) {
    for (const interfaceInfo of networkInterfaces[key]) {
      if (interfaceInfo.family === 'IPv4' && !interfaceInfo.internal) {
        ipv4Address = 'http://' + interfaceInfo.address + ':' + process.env.PUERTO + '/';
        break;
      }
    }
    if (ipv4Address) {
      break;
    }
  }

  if (ipv4Address) {
    res.json(ipv4Address);
  } else {
    res.send('No se pudo encontrar una dirección IPv4.');
  }
}); 

app.listen(process.env.PUERTO, host,  () => {
  const networkInterfaces = os.networkInterfaces();
  let ipv4Address;

  for (const key in networkInterfaces) {
      for (const interfaceInfo of networkInterfaces[key]) {
          if (interfaceInfo.family === 'IPv4' && !interfaceInfo.internal) {
              ipv4Address = interfaceInfo.address;
              break;
          }
      }
      if (ipv4Address) {
          break;
      }
  }

  console.log('Servidor corriendo en puerto: ' + process.env.PUERTO);
  
  if (ipv4Address) {
      console.log('Dirección IPv4: ' + ipv4Address);
  } else {
      console.log('No se pudo encontrar una dirección IPv4.');
  }
});

