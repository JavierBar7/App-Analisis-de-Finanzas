const { User } = require('../models/Users');

const register = async (_, res) => {
    try {
        res.render('register');
    } catch (error) {
        console.error('Error al mostrar la página de registro', error);
        throw error;
    }
};

const checkUser = async (req, res) => {
    try {
        const { username } = req.query;
        const exists = await User.checkUser(username); 
        res.status(200).json({ exists });
    } catch (error) {
        console.error('Error al verificar el usuario', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const newUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        await User.createUser(username, password); 
        res.redirect('/login');
    } catch (error) {
        console.error('Error al registrar el usuario', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = { register, checkUser, newUser };