const {Transaction} = require('../models/Transaction');

const addTransaction = (req, res) => {
    const { description, amount, type } = req.body;
    const userId = req.session.user.user_id; 
    Transaction.addTransaction(description, amount, type, userId)
        .then(() => {
            res.redirect('/index');
        })
        .catch(error => {
            console.error('Error al agregar la transacción:', error);
            res.redirect('/index');
        });
};

const updateTransaction = (req, res) => {
    const { transaction_id, description, amount, type } = req.body;
    Transaction.updateTransaction(transaction_id, description, amount, type)
        .then(() => {
            res.redirect('/index');
        })
        .catch(error => {
            console.error('Error al actualizar la transacción:', error);
            res.redirect('/index');
        });
};

const deleteTransaction = (req, res) => {
    const { transaction_id } = req.body;
    Transaction.deleteTransaction(transaction_id)
        .then(() => {
            res.redirect('/index');
        })
        .catch(error => {
            console.error('Error al eliminar la transacción:', error);
            res.redirect('/index');
        });
};

module.exports = {addTransaction, updateTransaction, deleteTransaction};