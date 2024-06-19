const farmModel = require('../Model/farmModel.js');

const register = async(req, res)=>{
  try {
    const {age, nameOfAnimal, breed, colour} = req.body;
let matured = false
    if (age >= 10) {
      matured = true
    }
    const animal = await farmModel.create({
      nameOfAnimal,
      breed,
      age,
      colour,
      isMatured: matured
    });
    res.status(201).json({
      message: 'Animal profile created successfully',
      data: animal
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
const getAll = async(req, res)=>{
  try {
    const allAnimals = await farmModel. find();
    if (allAnimals.length=== 0) {
      res.status(200).json({
        message: `list of all animal in the database: ${allAnimals}`,
        data: animal
      })
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


const getOne = async(req, res)=>{
  try {
    const { id} = req.params.id
    const animal = await farmModel. findById(id);
    if (!animals) {
      res.status(404).json({
        message: `Animal with ID: ${id} not found`,
        data: animal
      })
    }else{
      res.status(200).json({
        message: `animal found`,
        data: animal
      })
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}










module.exports = {
  register,
  getAll,
  getOne
}