const { Transaction } = require('../models/Transaction');


const index = async (_, res) => {
    try {
        const transactions = await Transaction.getAll();
        res.render('index', { transactions: transactions || [] });
    } catch (error) {
        console.error('Error al obtener transacciones:', error);
        res.status(500).send('Error al cargar las transacciones');
    }
}

const newTransaction = async (req, res) => {
    try {
        const { description, amount, type } = req.body;
        await Transaction.addTransaction(description, amount, type);
        res.redirect('/index');
    } catch (error) {
        console.error('Error al agregar la transacción:', error);
        res.status(500).send('Error al agregar la transacción');
    }
}

    module.exports = {index,newTransaction}