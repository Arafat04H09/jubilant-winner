const mysql = require('mysql')
const db = mysql.createConnection({
    host: "usersdb.cv0wtxrpk8ni.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "leonxu007",
    port: "3306",
    database: "usersdb"
})

module.exports = db;