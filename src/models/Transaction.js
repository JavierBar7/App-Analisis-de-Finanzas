const connection = require('../config/database')

class Transaction {
    constructor(description, amount, type, user_id){
        this.description = description;
        this.amount = amount;
        this.type = type;
        this.user_id = user_id;
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

    static async getByUser(user_id){
        try {
            const [results] = await connection.promise().query(
                'SELECT * FROM transaction WHERE user_id = ?',
                [user_id]
            );
            return results;
        } catch (error) {
            console.error('Error al obtener transacciones:', error);
            throw error;
        }
    }

    static async addTransaction(description, amount, type, user_id) {
        try {
            await connection.promise().query(
                'INSERT INTO transaction (description, amount, type, user_id) VALUES (?, ?, ?, ?)',
                [description, amount, type, user_id]
            );
        } catch (error) {
            console.error('Error al agregar la transacción', error);
            throw error;
        }
    }

    static async updateTransaction(transaction_id, description, amount, type) {
        try {
            await connection.promise().query(
                'UPDATE transaction SET description = ?, amount = ?, type = ? WHERE transaction_id = ?',
                [description, amount, type, transaction_id]
            );
        } catch (error) {
            console.error('Error al actualizar la transacción', error);
            throw error;
        }
    }

    static async deleteTransaction(transaction_id) {
        try {
            await connection.promise().query(
                'DELETE FROM transaction WHERE transaction_id = ?',
                [transaction_id]
            );
        } catch (error) {
            console.error('Error al eliminar la transacción', error);
            throw error;
        }
    }
}

module.exports = {Transaction};