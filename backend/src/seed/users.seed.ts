import mongoose from "mongoose";
import UserModel from "../models/user.model";

export const seedUsers = async () => {
  const users = await UserModel.insertMany([
    {
      name: "Asif Ahemmed",
      email: "asif@example.com",
      password: "password123",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Sarah Khan",
      email: "sarah@example.com",
      password: "password123",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Admin User",
      email: "admin@example.com",
      password: "admin123",
      avatar: null,
    },
  ]);

  return users;
};
