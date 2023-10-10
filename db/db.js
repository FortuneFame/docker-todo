const mysql = require('mysql2/promise');
require('dotenv').config();

exports.pool = mysql.createPool(process.env.DATABASE_URL);