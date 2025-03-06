// import { Request, Response } from "express";
// import Community from "../models/community.model";

// export const createPost = async (req: Request, res: Response) => {
//   try {
//     const { user, message } = req.body;
//     const newPost = new Community({ user, message });

//     await newPost.save();
//     res.status(201).json({ message: "Post created successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

// export const getPosts = async (req: Request, res: Response) => {
//   try {
//     const posts = await Community.find();
//     res.json(posts);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };



import { Request, Response } from "express";
import Community from "../models/community.model";

export const createPost = async (req: Request, res: Response) => {
  try {
    const { user, message } = req.body;
    const newPost = new Community({ user, message });

    await newPost.save();
    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Community.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};