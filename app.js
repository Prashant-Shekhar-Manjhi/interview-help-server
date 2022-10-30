const express = require('express');
const app = express();
const morgan = require('morgan');


const userRouter = require('./routes/userRoutes');

// middile ware...
app.use(express.json());
app.use(morgan('dev'));


//routes middleware ...
app.use('/api/users',userRouter);

module.exports = app;