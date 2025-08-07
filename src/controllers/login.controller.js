const { User } = require('../models/Users');

const loginUser = async (req, res)=>{
    try {
        res.render('login')
        const { username, password} = req.body;
        
        const newUser = User.createUser(username,password);
    } catch (error) {
        console.error('Error al registar el usuario', error);
        throw error;
    }
}


module.exports= {loginUser}