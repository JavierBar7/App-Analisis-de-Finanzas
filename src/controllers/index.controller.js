const { Transaction } = require('../models/Transaction');


const index = async (_, res) => {
    try {
        const transaction = await Transaction.getAll();
        res.render('index', { transactions: transaction });
    } catch (error) {
        console.error('Error al obtener transacciones:', error);
        res.status(500).send('Error al cargar las transacciones');
    }
}


    module.exports = {index}