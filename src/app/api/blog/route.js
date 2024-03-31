import { Post } from "@/lib/models";
import { connectToDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDB();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
