const connection = require('../config/database');



class User {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    static async checkUser(username){
        try {
            const [rows] = await connection.promise().query(
                'SELECT * FROM users WHERE username = ? LIMIT 1',
                [username],
            )
            return rows.length > 0;
        } catch (error) {
            console.error ('Error al verificar el usuario', error);
            throw error
        }
    }

    static async createUser(username,password){
        try {
            if (await this.checkUser(username)) {
                throw new Error('El nombre de usuario ya está registrado');
            }
            const [created] = await connection.promise().query(
                'INSERT INTO users (username, password) VALUES (?, ?)',
                [username, password]
            )
        } catch (error) {
            console.error('Error al registar el usuario', error);
        throw error;
        }
    }

    static async findUser(username, password) {
        try {
            const [rows] = await connection.promise().query(
                'SELECT * FROM users WHERE username = ? AND password = ? LIMIT 1',
                [username, password]
            );
            return rows[0] || null;
        } catch (error) {
            console.error('Error al buscar el usuario', error);
            throw error;
        }
    }
}

module.exports = {User};