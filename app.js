const express = require('express')

const app = express();

app.set("view engine","hbs");
app.set("views" ,"./view")

app.get('/',(req , res)=>{
    res.render("Book")
});
app.get('/addbook',(req , res)=>{
    const {name ,phone , email} = req.query
   let qry = "select * from student1 where emailid=? or phoneno=?";
   mysql.query(qry,[email , phone] ,(err , results)=>{
          if(err)
          throw err
           else{
                 if(results.length > 0)
                 {
                     res.render("add",{checkmesg:true})
                 }
                 else
                 {
                       let qry2 = "insert into student1 values(?,?,?)";
                       mysql.query(qry2 ,[name , phone , email ],(err , results)=>{
                            if(results.affectedRows > 0)
                            {
                                res.render("add",{mesg : true})
                            }
                       })
                 }
           }
   })
});

app.listen(3000);