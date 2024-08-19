const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'local',
})

con.connect((err) => {
    if (err) {
        console.log("Error while connecting DB");
    } else {
        console.log('DB connected successfully');
    }
})

module.exports = con;