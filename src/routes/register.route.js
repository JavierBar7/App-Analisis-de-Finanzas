const router = require('express').Router();
const { register, checkUser, newUser } = require('../controllers/register.controller');

router.get('/', register);
router.get('/checkUser', checkUser);
router.post('/', newUser);

module.exports = router; 