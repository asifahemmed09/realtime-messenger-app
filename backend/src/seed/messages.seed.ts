import MessageModel from "../models/message.model";

export const seedMessages = async (chats: any[], users: any[]) => {
  const [asif, sarah, john, admin] = users;
  const [privateChat, groupChat] = chats;

  const messages = await MessageModel.insertMany([
    // Private chat messages
    {
      chatId: privateChat._id,
      sender: asif._id,
      content: "Hey Sarah! How are you?",
    },
    {
      chatId: privateChat._id,
      sender: sarah._id,
      content: "I'm good! How about you?",
    },

    // Group chat messages
    {
      chatId: groupChat._id,
      sender: admin._id,
      content: "Welcome everyone to Project Alpha 🚀",
    },
    {
      chatId: groupChat._id,
      sender: john._id,
      content: "Glad to be here!",
    },
    {
      chatId: groupChat._id,
      sender: asif._id,
      content: "Let’s get started 💪",
    },
  ]);

  // Update lastMessage for chats
  await Promise.all([
    privateChat.updateOne({ lastMessage: messages[1]._id }),
    groupChat.updateOne({ lastMessage: messages[messages.length - 1]._id }),
  ]);

  return messages;
};
