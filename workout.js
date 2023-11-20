const express =require('express')
const router =express.Router() //function router
const Workout =require('../model/workoutmodel')
const mongoose =require('mongoose')
const{getworkout,getworkouts,creatworkout,updatworkout,deletworkout}=require('../controllers/workoutcontroller')
router.get('/',getworkouts)
 router.get('/:id',getworkout)

 router.delete('/:id',deletworkout)
 
 router.patch('/:id',updatworkout ) 



 router.post('/', creatworkout)
 module.exports =router