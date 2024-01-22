const express = require("express");
const app = express();
require('dotenv').config()
const cors = require("cors") ;
const connectDb = require("./connection");
const userRoute = require("./routes/user");
const port = process.env.PORT || 5000;


// middlewares
app.use(cors({
    origin: [],
    credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// db connection
connectDb()


// routes
app.use("/users", userRoute);

// for run test
app.get("/", (req, res) => res.send("Server is running"));
app.listen(port, async() => {
    console.log(`Example app listening on port ${port}!`)

});
