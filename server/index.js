const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel =require('./model/users')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://shop24963:shop24963@cluster0.ncxgg.mongodb.net/crud")

app.get("/", (req, res) => {
    UserModel.find({})
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
    
});

app.get("/getUser/:id", (req, res) => {
    const id = req.params.id
    UserModel.findById({_id:id})
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
    
});

app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndDelete(id)
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
    
});

app.put("/updateUser/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const updatedUser = UserModel.findByIdAndUpdate(
      id, 
      { name, email, age }, 
     
    )
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
    
});




app.post("/createUser",(req,res)=>{
    UserModel.create(req.body)
    .then((data)=>{
        res.json(data)
        }).catch((err)=>{
            res.json({message:err})
            })
})

app.listen(3001,()=>{
    console.log("server is running on port 3001")
})
