const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors')


const userRouter = require('./routes/userRoutes');
const experienceRouter = require('./routes/experienceRoutes');
const messageRouter = require("./routes/messageRoutes");

// middile ware...
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes middleware ...
app.use('/api/users',userRouter);
app.use("/api/experience", experienceRouter);
app.use("/api/message", messageRouter);

module.exports = app;