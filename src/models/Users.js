const connection = require('../config/database')

const users = []

class User {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    static async checkUser(username){
        try {
            const [rows] = await connection.promise().query(
                'SELECT 1 FROM users WHERE username = ? LIMIT 1',
                [username],
            )
            return rows.length > 0;
        } catch (error) {
            console.error ('Error al registrar el usuario', error);
            throw error
        }
    }

    static async createUser(username,password){
        try {
            if (await this.usernameExists(username)) {
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
}

module.exports = {User};