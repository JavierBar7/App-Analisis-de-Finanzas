const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');

const registerRouter = require ('./routes/register.route.js')
const indexRouter = require('./routes/index.route');
const transactionRouter = require('./routes/transaction.route');
const loginRouter = require('./routes/login.route');

const sessionCheck = require('./middlewares/sessionCheck');

app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: false
}));
app.get('/login', (req, res) => {
    res.render('login', { user: undefined });
});


app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/transaction', transactionRouter);
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.get('/index', sessionCheck, (req, res) => {
    res.render('index', { user: req.session.user });
});

app.get('/401', (_, res) => {
    res.render('401')
})


module.exports = app;