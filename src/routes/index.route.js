const router = require('express').Router();
const {index} = require('../controllers/index.controller');
const sessionCheck = require('../middlewares/sessionCheck')

router.get('/', sessionCheck, index);
// router.get('/', index);
module.exports = router;