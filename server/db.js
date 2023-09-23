const { createPool } = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

exports.pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: process.env.DBPASS,
    database: process.env.DBNAME1,
});

exports.pool2 = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: process.env.DBPASS,
    database: process.env.DBNAME2,
});
