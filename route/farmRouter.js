const express = require('express');
const { register, getAll, getOne, deleteAnimal, getAllMaturedAnimal, upDateSoldAnimal, getAllYetToBeSold } = require('../controller/farmController');





const router = express.Router();

router.post('/registerAnimal', register);
router.get('/allAnimal', getAll);
router.get('/animal', getOne);
router.delete('/deleteAnimal/:id', deleteAnimal);
router.get('/getAllMaturedAnimal',getAllMaturedAnimal );
router.put('/updateAnimal', upDateSoldAnimal);
router.put('/yettobeSold', getAllYetToBeSold);


module.exports = router