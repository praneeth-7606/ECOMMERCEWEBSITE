import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import database from "./config/db.js";
import authroutes from "./routes/authroute.js"
import categoryroutes from "./routes/categoryroutes.js"
import productroutes from "./routes/productsroutes.js"
// const cors = require('cors');
import cors from "cors"
const app=express()
app.use(cors()); 
// const database=require("./config/db")

dotenv.config();

app.use(express.json())
app.use(morgan("dev"))

app.use("/api/vi/auth",authroutes)
app.use("/api/vi/category",categoryroutes)
// app.use("/api/vi/category",categoryroutes)
app.use("/api/vi/product", productroutes);
app.get("/",(req,res)=>{
    res.send("<h1>hi hello good morning darling </h1>")
})
database()
const port=3002
app.listen(port,()=>{
    console.log(`connected to the server  running on port ${port}`)
})