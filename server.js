const express = require('express');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({path:'./config.config.env'});

const app=express();
app.get('/', (req,res) =>{
    res.send('<h1>Hello from express</h1>');
    // res.send({name:'Brad'});
    // res.json({name:'Brad'});
    // res.sendStatus(400);
    // res.status(400).json({success:false});
    //res.status(200).json({success:true, data:{id:1}});
})

// app.get('/api/v1/hospitals', (req, res) => {
//     res.status(200).json({success: true, msg:"Show all hospitals"});
//   });
  
//   app.get("/api/v1/hospitals/:id", (req, res) => {
//     res.status(200).json({success: true, msg: `Show hospital ${req.params.id}`})
//   });
  
//   app.post("/api/v1/hospitals", (req, res) => {
//     res.status(200).json({success: true, msg:"Create new hospitals"});
//   });
  
//   app.put('/api/v1/hospitals/:id',(req, res) => {
//     res.status(200).json({success: true, msg: `Update hospital ${req.params.id}`});
//   });
  
  app.delete("/api/v1/hospitals/:id", (req, res) => {
    res.status(200).json({success: true, msg: `Delete hospital ${req.params.id}`});
  });
const PORT=process.env.PORT || 5000;
app.listen(PORT, console.log('Server running in ',process.env.NODE_ENV, 'mode on port ', PORT));

