const router = require('express').Router();
const { login, loginUser } = require('../controllers/login.controller');

router.get('/', login);
router.post('/', loginUser);

module.exports = router;