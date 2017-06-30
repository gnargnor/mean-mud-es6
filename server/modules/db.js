const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: PROCESS.ENV.MYSQL_HOST,
    user: PROCESS.ENV.MYSQL_USERNAME,
    password: PROCESS.ENV.MYSQL_PASSWORD,
    database: PROCESS.ENV.MYSQL_DB
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;