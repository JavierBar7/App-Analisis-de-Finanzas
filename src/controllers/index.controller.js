const { Transaction } = require('../models/Transaction');

const index = async (req, res) => {
    try {
        const userId = req.session.user.user_id; // or req.session.user.id, adjust as needed
        const transactions = await Transaction.getByUser(userId);
        res.render('index', { transactions: transactions || [] });
    } catch (error) {
        console.error('Error al obtener transacciones:', error);
        res.status(500).send('Error al cargar las transacciones');
    }
}

const newTransaction = async (req, res) => {
    try {
        const { description, amount, type } = req.body;
        const userId = req.session.user.user_id; // or req.session.user.id
        await Transaction.addTransaction(description, amount, type, userId);
        res.redirect('/index');
    } catch (error) {
        console.error('Error al agregar la transacción:', error);
        res.status(500).send('Error al agregar la transacción');
    }
}

module.exports = {index, newTransaction}