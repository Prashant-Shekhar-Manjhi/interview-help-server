const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors')


const userRouter = require('./routes/userRoutes');

// middile ware...
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes middleware ...
app.use('/api/users',userRouter);

module.exports = app;