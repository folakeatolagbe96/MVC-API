const farmModel = require('../Model/farmModel.js');

const register = async(req, res)=>{
  try {
    const {age, nameOfAnimal, breed, colour, issold} = req.body;
let matured = false
    if (age >= 30) {
      matured = true
    }
    const animal = await farmModel.create({
      nameOfAnimal,
      breed,
      age,
      colour,
      issold,
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
    const allAnimals = await farmModel.find();
    if (allAnimals.length=== 0) {
      res.status(200).json({
        message:"list of all animal in the database",
        data: allAnimals
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
    const animals = await farmModel. findById(id);
    if (!animals) {
      res.status(404).json({
        message: `Animal with ID: ${id} not found`,
        data: animals
      })
    }else{
      res.status(200).json({
        message: `animal found`,
        data: animals
      })
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


//DELETE 

const deleteAnimal = async(req, res)=>{
  try {
    const discardId = req.params.id
    const animals = await farmModel.findByIdAndDelete(discardId);
    if (!animals) {
      res.status(404).json({
        message: `Animal with ID: ${discardId} not found`,
        data: animals
      })
    }res.status(200).json({
        message: `Animal with the ID ${discardId} deleted successfully`,
        data: animals
      })
    
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}



//GET ALL MATURED ANIMAL

const getAllMaturedAnimal = async(req, res)=>{
  try {
  
    const getAllMatured = await farmModel.find({isMatured: true});
   (getAllMatured.length === 0) 
      res.status(200).json({
        message: getAllMatured,
        data: getAllMaturedAnimal
      })
    
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

//GET ALL SOLD ANIMAL

const getAllYetToBeSold = async(req, res)=>{
  try {
  
    const getAllYetToBeSold = await farmModel.find({issold: false});

   (getAllYetToBeSold.length === 0) 
      res.status(200).json({
        message:"All to be sold found successfully",
        data: getAllYetToBeSold
      })
    
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}














//UPDATE
const upDateSoldAnimal = async(req, res)=>{
  try {
    const  soldId = req.params.id
    const animals = await farmModel.findByIdAndUpdate(soldId,req.body,{new: true});
    if (!animals) {
      res.status(404).json({
        message: `Animal with ID: ${soldId} update successfully`,
        data: animals
      })
    }else{
      res.status(200).json({
        message: `animal found`,
        data: animals
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
  getOne,
  deleteAnimal,
  getAllMaturedAnimal,
  upDateSoldAnimal,
  getAllYetToBeSold
}