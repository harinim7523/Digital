import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
// import Mongo from './Mongo';
const root = ReactDOM.createRoot(document.getElementById('root'));



// const express=require('express');
// import * as express from 'express';
// const mongoose=require("mongoose");
// const connectDB=async()=>
// {
//   mongoose.connect('mongodb://localhost:27017/myDatabase', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//     .then(() => {
//       console.log('Connected to MongoDB');
//     })
//     .catch((error) => {
//       console.error('Error connecting to MongoDB:', error);
//     });
// }


// const app=express();
// const connectDB=async()=>
// {
//   mongoose.connect("mongodb://localhost:27017/Product");
//   const productschema=new mongoose.Schema({});
//   const product=mongoose.model("products",productschema);
//   const data=await product.find();
//   console.warn(data);
// }
// connectDB();

root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
 // <Mongo/>
);

reportWebVitals();
