const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors')


const userRouter = require('./routes/userRoutes');
const experienceRouter = require('./routes/experienceRoutes');
const messageRouter = require("./routes/messageRoutes");
const companyRouter = require("./routes/companyRoute");
const courseRouter = require("./routes/courseRoute");
const contentRouter = require("./routes/contentRoute");
const suggestionRouter = require("./routes/suggestionRoute")

// middile ware...
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes middleware ...
app.use('/api/users',userRouter);
app.use("/api/experience", experienceRouter);
app.use("/api/message", messageRouter);
app.use("/api/company", companyRouter);
app.use("/api/course", courseRouter);
app.use("/api/content", contentRouter);
app.use("/api/suggestion", suggestionRouter);

module.exports = app;