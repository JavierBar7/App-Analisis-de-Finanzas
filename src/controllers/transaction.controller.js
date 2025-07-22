const {Transaction} = require('../models/Transaction');

const addTransaction = (req, res) => {
    const { description, amount, type } = req.body;
    const transaction = new Transaction(description, amount, type);
    transaction.save();


    res.redirect('/');
};

module.exports = {addTransaction};