require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.query(`
    CREATE TABLE tasks (
        id INT NOT NULL AUTO_INCREMENT, 
        name_tasks VARCHAR(250),
        completed BOOLEAN DEFAULT false,
        PRIMARY KEY (id) 
    ) 
`);

connection.end();
