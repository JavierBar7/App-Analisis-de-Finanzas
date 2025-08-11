const { User } = require('../models/Users');

const login = async (_, res)=>{
    try {
        res.render('login');

    } catch (error) {
        console.error('Error al mostrar la página de login', error);
        throw error;
    }
}

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findUser(username, password);
        if (!user) {
            return res.render('login', { error: 'Usuario o contraseña inválida' });
        }

        if (user) {
            req.session.user = user;
            req.session.save(() => res.redirect('/index'));
            return;
        }
        res.render('login', { error: 'Usuario o contraseña inválida' });
    } catch (error) {
        console.error('Error al iniciar sesión', error);
        throw error;
    }
};

module.exports= { login, loginUser }