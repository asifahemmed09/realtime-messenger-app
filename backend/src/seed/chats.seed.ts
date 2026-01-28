import ChatModel from "../models/chat.model";
import { Types } from "mongoose";

export const seedChats = async (users: any[]) => {
  const [asif, sarah, john, admin] = users;

  const chats = await ChatModel.insertMany([
    // One-to-one chat
    {
      participants: [asif._id, sarah._id],
      isGroup: false,
      createdBy: asif._id,
    },

    // Group chat
    {
      participants: [asif._id, sarah._id, john._id, admin._id],
      isGroup: true,
      groupName: "Project Alpha",
      createdBy: admin._id,
    },
  ]);

  return chats;
};
