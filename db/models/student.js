const mongoose=require("mongoose");
const rollNumberGenerator=require("../../utility/numbergenerator");

const studentSchema=mongoose.Schema({
  FirstName:{
    type:String,
    required: true,
    trim: true,
    minlength: 1,
  },
  Lastname:{
    type:String,
    required: true,
    trim: true,
    minlength: 1,
  },
  Email:{
    type:String,
    required: true,
    trim: true,
    minlength: 1,
  },
  MobileNo:{
    type:Number,
    required:true
  },
  RollNo:{
    type:Number
  },

  },
  {
  versionKey: false
  });


var student=mongoose.model('Student',studentSchema);

module.exports=student;