const router = require('express').Router();
const {addTransaction} = require('../controllers/transaction.controller')

router.post('/add-transaction', addTransaction)

module.exports= router;