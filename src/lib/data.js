import { Post, User } from "./models"
import { connectToDB } from "./utils"
import { unstable_noStore as noStore } from "next/cache"

export const getPosts=async()=>{
    try {
        connectToDB()
        const posts = await Post.find()
        return posts
    } catch (error) {
        throw new Error('Something went wrong while getting posts!')
    }
}

export const getPost=async(slug)=>{
    try {
        connectToDB()
        const post = await Post.findOne({slug})
        return post
    } catch (error) {
        throw new Error('Something went wrong while getting post!')
    }
}

export const getUser=async(id)=>{
    noStore()
    try {
        connectToDB()
        const user = await User.findById(id)
        return user
    } catch (error) {
        throw new Error('Something went wrong while getting user!')
    }
}

export const getUsers=async()=>{
    try {
        connectToDB()
        const users = await User.find()
        return users
    } catch (error) {
        throw new Error('Something went wrong while getting users!')
    }
}

