const router = require('express').Router();
const {addTransaction} = require('../controllers/transaction.controller')

router.post(['/', '/index'], addTransaction);

module.exports= router;