const router = require('express').Router();
const {addTransaction,updateTransaction,deleteTransaction} = require('../controllers/transaction.controller')

router.post(['/', '/index'], addTransaction);
router.post('/update', updateTransaction);
router.post('/delete', deleteTransaction);

module.exports= router;