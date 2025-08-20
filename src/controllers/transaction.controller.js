const {Transaction} = require('../models/Transaction');

const addTransaction = (req, res) => {
    const { description, amount, type } = req.body;
    const transaction = new Transaction(description, amount, type);
    transaction.save();
    Transaction.addTransaction(description, amount, type)
        .then(() => {
            res.redirect('/index');
        })
        .catch(error => {
            console.error('Error al agregar la transacción:', error);
            res.redirect('/index');
        });
};

module.exports = {addTransaction};