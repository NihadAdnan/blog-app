import mongoose, { mongo } from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },    
    img:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
    },
},{timestamps:true})


const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },  
    img:{
        type:String,
    },
    userId:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
},{timestamps:true}
)


export const User = mongoose.models?.User || mongoose.model("User",userSchema)
export const Post = mongoose.models?.Post || mongoose.model("Post",postSchema)