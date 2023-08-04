const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const db = require('./db.config');
db.sequelize.sync();

app.get('/',(req,res)=>{
    res.send("Hello world.....")
});

app.listen(3000 , ()=>{
    console.log("server is running....")
})