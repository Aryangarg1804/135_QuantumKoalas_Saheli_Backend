import { Request, Response } from "express";
import Chat from "../models/chat.model";

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const { sender, message } = req.body;
    const newMessage = new Chat({ sender, message });

    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await Chat.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};