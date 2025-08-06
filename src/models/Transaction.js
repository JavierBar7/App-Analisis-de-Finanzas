const connection = require('../config/database')

const transactions = []

class Transaction {
    constructor(description, amount, type){
        this.description = description;
        this.amount = amount;
        this.type = type;
    }

    static async getAll(){
        try {
            const [results, fields] = await connection.promise().query('SELECT * FROM transaction');
            return results;
        } catch (error) {
            console.error('Error al obtener transacciones:', error);
            throw error;
        }
    }

    save(){
        transactions.push(this)
    }
}

module.exports = {Transaction};