const express =require('express')
require('dotenv').config() //import env 
const workoutroutes=require('./routes/workout') //import api 
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()   //creat server 
app.use(cors());
app.use(express.json()) 
app.use('/api/workouts',workoutroutes) 
mongoose.connect(process.env.MONGO_URL).then(()=>{
    
app.listen(process.env.PORT,()=>{
    console.log('connected to db and listening for requests')
})
}).catch((err)=>{
    console.log(err)
})

