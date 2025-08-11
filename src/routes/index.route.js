const router = require('express').Router();
const {index} = require('../controllers/index.controller');
const sessionCheck = require('../middlewares/sessionCheck');

router.get('/', index);
module.exports = router;