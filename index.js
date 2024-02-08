const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;
const userRoute = require('./routes/user');
const recruitmentRoutes = require('./routes/recruitmentRoute');
const { default: mongoose } = require('mongoose');
const applicationRouter = require('./routes/application');
const holidayroutes = require('./routes/holidays');
const loanRoutes = require('./routes/loan');
const courseRoutes = require('./routes/courseRoute')

const projectRoute = require('./routes/projects');
const teamRoute = require('./routes/team');

// middlewares
app.use(
  cors({
    origin: ['https://hr-vertex-client.vercel.app', 'http://localhost:3000', " * "],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONNECTION
mongoose
  .connect(
    `mongodb+srv://hrVertexserver:hrvertexserver7712@hrvertex.rr1tlxn.mongodb.net/?retryWrites=true&w=majority`
  )
  .then((data) => {
    console.log('db connected');
  })
  .catch((err) => {
    console.log(process.env.DB_PASSWORD)
    console.log('error while connecting');
  });

// routes
app.use('/users', userRoute);
app.use('/recruitment', recruitmentRoutes);
app.use("/applications", applicationRouter);
app.use("/holidays", holidayroutes);
app.use("/loan", loanRoutes);
app.use('/course', courseRoutes)
app.use("/projects", projectRoute);
app.use("/team", teamRoute);

// for run test
app.get('/', (req, res) => res.send('Server is running'));
app.listen(port, async () => {
  console.log(`Example app listening on port ${port}!`);
});
