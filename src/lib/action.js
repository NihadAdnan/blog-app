"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from 'bcryptjs'

export const addPost = async (formData) => {
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

export const register = async (formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return "Password does not match!";
  }
  try {
    connectToDB();
    const user = await User.findOne({username});

    if (user) {
      return "User already exists!";
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
  } catch (error) {
    console.log(error);
    throw new Error("Somethiong went wrong");
  }
};


export const login = async (formData) => {
    const {username,password} =
      Object.fromEntries(formData);
    try {
    await signIn("credentials",{username,password})
    } catch (err) {
      console.log(err);

      if (err.message.includes("credentialsSignin")){
        return {error : "Invalid username or password"}
      }
      throw err
    }
  };
  