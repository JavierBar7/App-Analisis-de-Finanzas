const router = require('express').Router();
const register = require('../controllers/register.controller');

router.get('/',register);

router.get('/check-username', userController.checkUsername);

router.post('/register', userController.registerUser);

module.exports=router;