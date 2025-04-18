const express=require('express');
const mongoose =require('mongoose');
const userRouter=require('./routes/user');
const dotenv=require('dotenv')
dotenv.config();
mongoose.connect(process.env.MONGODBURL)
.then(()=>console.log('MongoDb connected'))
.catch((error)=>
    console.log(error.message)
)
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/user',userRouter);

app.listen(3005,()=>console.log("Server started at 3005"));