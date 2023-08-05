const mysql = require("mysql")

const con = mysql.createConnection({
    host:"localhost",
    username:"root",
    password:"root",
    database:"Book",
    port:3306
})

con.connect((err)=>{
    if(err)
    throw err
    else
    {
        console.log("connection")
    }
})