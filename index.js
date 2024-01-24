const express = require("express");
const app = express();
require('dotenv').config()
const cors = require("cors");
const port = process.env.PORT || 5000;
const connectDb = require("./connection");
const userRoute = require("./routes/user");
const recruitmentRoutes = require('./routes/recruitmentRoute');


// middlewares
app.use(cors({
    origin: ["https://hr-vertex-client.vercel.app"],
    credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes
app.use("/users", userRoute);
app.use('/recruitment', recruitmentRoutes);

// for run test
app.get("/", (req, res) => res.send("Server is running"));
app.listen(port, async () => {
    console.log(`Example app listening on port ${port}!`)
    // db connection
    await connectDb();
});
