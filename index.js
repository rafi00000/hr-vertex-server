const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;
const userRoute = require('./routes/user');
const recruitmentRoutes = require('./routes/recruitmentRoute');
const { default: mongoose } = require('mongoose');
const applicationRouter = require('./routes/application');
const holidayRoutes = require('./routes/holidays');

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
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@hrvertex.rr1tlxn.mongodb.net/?retryWrites=true&w=majority`
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
app.use("/attendance", applicationRouter);
app.use("/holidays", holidayRoutes);

// for run test
app.get('/', (req, res) => res.send('Server is running'));
app.listen(port, async () => {
  console.log(`Example app listening on port ${port}!`);
});
