const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const categoryRouter = require('./routes/categoryRoute');
const technologyRouter = require('./routes/technologyRoute');
const projectRouter = require('./routes/projectRoute');
require('dotenv').config();

// app config
const app = express();
const PORT= process.env.PORT|| 4000;

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));


// DB connect
connectDb();

// api endpoints
app.use("/api/category",categoryRouter)
app.use("/api/technology",technologyRouter)
app.use("/api/project",projectRouter)


app.get('/',(req,res)=>{
    res.send("API Working");
})

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})