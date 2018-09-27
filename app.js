const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const mongoose=require("mongoose");
const _=require("lodash");

const Student=require("./db/models/student");
const rollNumberGenerator=require("./utility/numbergenerator");

mongoose.connect('mongodb://mohitkumaris:fun974dose366@ds223542.mlab.com:23542/users')
  .then(()=>{
  console.log('Database is connected');
}).catch(()=>{
  console.log('Database is not connected');
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
res.setHeader("Access-Control-Allow-Headers",
  "Origin,X-Requested-With,Content-Type,Accept");
res.setHeader("Access-Control-Allow-Methods","GET,POST,DELETE,OPTIONS,PATCH");
next();
});


app.post('/api/student',(req,res,next)=>{

  const rollNumber=rollNumberGenerator.IDGenerator();
 // console.log(rollNumber);
  const student = new Student({
    FirstName:req.body.FirstName,
    Lastname:req.body.Lastname,
    Email:req.body.Email,
    MobileNo:req.body.MobileNo,
    RollNo:rollNumber
  });
  let message="";
  student.save()
    .then(result=>{
      //console.log(result);

      res.status(200).json(result);
    })
    .catch(err=>{
      //console.log(err);
      message=err;
      res.status(400).json({
        message:message
      });
    })


});

app.get("/api/student",(req,res)=>{

  Student.find().select("-_id")
    .then((students)=>{
      //console.log(students);

      res.status(200).send(students)
    });

});








module.exports=app;