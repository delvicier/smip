const { createPool } = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

exports.pool = createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: process.env.DBPASS,
    database: process.env.DBNAME1,
});

exports.pool2 = createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: process.env.DBPASS,
    database: process.env.DBNAME2,
});
