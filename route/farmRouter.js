const express = require('express');
const { register, getAll, getOne } = require('../controller/farmController');





const router = express.Router();

router.post('/registerAnimal', register);
router.get('/allAnimal', getAll);
router.get('/animal', getOne);
module.exports = router