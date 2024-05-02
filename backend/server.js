import express from "express";
import mongoose from "mongoose";
//import dotenv from "dotenv";

const app = express();

mongoose.set("strictQuery", true);
const connect = async () => {
    try {
      await mongoose.connect("mongodb+srv://admin:admin@cluster0.pueciih.mongodb.net/?retryWrites=true&w=majority&dbname=freelancedb");
      console.log("Connected to mongoDB!");
    } catch (error) {
      console.log(error);
    }
  };

app.listen(8800, ()=>{
    console.log("server is running");
})
