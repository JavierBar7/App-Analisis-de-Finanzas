const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./routes/index.route');
const transactionRouter = require('./routes/transaction.route');

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/transaction', transactionRouter);
app.use('/', indexRouter);



module.exports = app;