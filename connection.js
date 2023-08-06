const mysql = require("mysql")

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"toor",
    database:"amount",
    port:3306
});

con.connect((err)=>{
    if(err)
    throw err;
    else
    {
        console.log("connection")
    }
}) 
 module.exports.con = con