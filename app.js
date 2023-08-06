const express = require('express')

const app = express()
const mysql = require("./connection").con

app.set("view engine" , "hbs")
app.set("views" , "./view")

app.get('/',(req , res)=>{
    res.render("index")
});

app.get('/Book',(req , res)=>{
    res.render("Book")
});


app.get("/addmoney",(req , res)=>{
    const {name , phone , balanes , gender,acountno} = req.query
    let qry = "select * from money where phoneno=?"
    mysql.query(qry,[phone],(err , result)=>{
         if(err)
         throw err
        else
        {
            if(result.length> 0)
            {

            }
            else
            {
                let qry2 = "insert into money values(?,?,?,?,?)";
                mysql.query(qry2,[balanes,phone ,name , gender ,acountno], (err , result)=>{
                    res.send(result);
                })
            }
        }
      })
})
app.get('/Delete',(req, res)=>{
    res.render("Delete")
});

app.get('/removeacount',(req , res)=>{
    const {phone} = req.query
    let qry = "delete from money where phoneno=?"
    mysql.query(qry,[phone],(err,result)=>{
        if(err)
        throw err
         else
         {
            if(result.affectedRows > 0)
            {
                res.render("delete",{mesg1:true , mesg2: false})
            }
            else
            {
                res.render("delete",{mesg1:true , mesg2: false})
            }
         }
    })
})

app.listen(3000)

