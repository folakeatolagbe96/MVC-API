const { timeStamp } = require('console');
const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema({
  nameOfAnimal:{
    type:String,
    required: [true, "nameOfAnimal is required"],
    unique: [true, 'nameOfAnimal already can only be one']

  },

  breed:{
    type:String,
    required: [true, "Animal breed is required"]
  },

  colour:{
    type:String,
    required: [true, "Animal breed is required"]
  },

  age:{
    type:String,
    required: [true, "Animal age is required"]
  },

  isMatured:{
    type:String,
    default: false
  },
  issold:{
    type:String,
    default: false
  },

}, {timeStamp: true});
const farmModel = mongoose.model('Farm', farmSchema);

module.exports = farmModel;