"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from 'bcryptjs'

export const addPost = async (prevState,formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("Saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    return error;
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Post.findByIdAndDelete(id);
    console.log("Deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    return error;
  }
};


export const addUser = async (prevState,formData) => {
  const { username,email,password,img,isAdmin } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new User({
      username,
      email,
      password,
      img,
      isAdmin
    });
    await newUser.save();
    console.log("Saved to db");
    revalidatePath("/admin");
  } catch (error) {
    return error;
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.deleteMany({userId:id})
    await User.findByIdAndDelete(id);
    console.log("Deleted from db");
    revalidatePath("/admin");
  } catch (error) {
    return error;
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState,formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return {error:"Password does not match!"};
  }
  try {
    connectToDB();
    const user = await User.findOne({username});

    if (user) {
      return {error:"User already exists!"}
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new User({
      username,
      email,
      img,
      password:hashedPassword,
    });
    await newUser.save();
    console.log("Saved to db");

    return {success:true}
  } catch (error) {
    console.log(error);
    return {error:"Something went wrong!"}
  }
};


export const login = async (previousState,formData) => {
    const {username,password} =
      Object.fromEntries(formData);
    try {
    await signIn("credentials",{username,password})
    } catch (err) {
      if (err.message.includes("CredentialsSignin")){
        return {error : "Invalid username or password"}
      }
      throw err
    }
  };
  