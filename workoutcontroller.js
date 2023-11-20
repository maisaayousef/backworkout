const Workout =require('../model/workoutmodel')
const mongoose =require('mongoose')
  
const getworkouts= async(req,res)=>{
    const work=await Workout.find().sort({createdAt:-1})
     res.status(200).json(work)
 }

const getworkout=async(req,res)=>{
    const {id}=req.params     //params in url 
    if(!mongoose.Types.ObjectId.isValid(id)){
   return res.status(404).json({error:'no such workouts'})
    }
    const work =await Workout.findById(id)
    if(!work){
       return res.status(404).json({error:'no such workout'})
    } res.status(200).json(work)
 
  }

  const creatworkout=async(req,res)=>{
    const{title,load,reps}=req.body
    try{
       const work=await Workout.create({title,load,reps})
       res.status(200).json(work)
    }catch(e){
       res.status(400).json({error:e.message})
    }
  }

  const updatworkout =async(req,res)=>{
    const {id}=req.params     //params in url 
    if(!mongoose.Types.ObjectId.isValid(id)){
   return res.status(404).json({error:'no such workouts'})
    }
    const work =await Workout.findByIdAndUpdate({_id:id},{...req.body})
    if(!work){
       return res.status(404).json({error:'no such workout'})
    } res.status(200).json(work)
 
  }


  const deletworkout=async(req,res)=>{
    const {id}=req.params     //params in url 
    if(!mongoose.Types.ObjectId.isValid(id)){
   return res.status(404).json({error:'no such workouts'})
    }
    const work =await Workout.findByIdAndDelete({_id:id})
    if(!work){
       return res.status(404).json({error:'no such workout'})
    } res.status(200).json(work)
 
  }


  module.exports={getworkout,getworkouts,creatworkout,updatworkout,deletworkout}