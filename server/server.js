const express=require("express")
const app=express()
const dotenv=require("dotenv")
dotenv.gitconfig()
const cors=require("cors")
app.use(cors())
const bodyParser=require("body-parser")
app.use(body-parser.json())
const mongoose=require("mongoose")
const Schema=mongoose.Schema
const PORT=mongoose(process.env.PORT)

mongoose.connect(process.env.CONNECT.PASSWORD)
.then(()=>console.log("CONNECTED"))

const UserSchema= new Schema({
    username:"String",
    password:"String",
    email:"String",
    basketItems:"Array",
    img:"String",
    title:"String"
})

const MyUserModel=mongoose.model("UserModel",UserSchema)

app.get("/api",(req,res)=>{
    res.send({
        message:"Connected"
    })
})

app.get("/api/users",async(req,res)=>{
    let myUsers= await MyUserModel.find({})
    res.send({
        message:"Successfull find",
        data:myUsers
    })
})


app.get("/api/users/:id",async(req,res)=>{
    let {id}=req.params
    let myUser= await MyUserModel.findElementById({id})
    res.send({
        message:"Successfull findelementbyid",
        data:myUser
    })
})

app.post("/api/users",async(req,res)=>{
    let newUser=new MyUserModel(req.body)
    await newUser.save()
    res.send({
        message:"Successfull addnewuser",
        data:req.body
    })
})

app.get("/api/users/:id",async(req,res)=>{
    let {id}=req.params
    let deleteUser= await MyUserModel.deleteElementById({id})
    res.send({
        message:"Successfull deleteelementbyid",
        data:deleteUser
    })
})


app.listen(PORT,()=>{
   console.log(`SALAM $(PORT)`)
})