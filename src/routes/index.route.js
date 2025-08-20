const router = require('express').Router();
const { index, newTransaction } = require('../controllers/index.controller');
const sessionCheck = require('../middlewares/sessionCheck');


router.get(['/', '/index'], sessionCheck, index);
router.post('/index', sessionCheck, newTransaction);


module.exports = router;
