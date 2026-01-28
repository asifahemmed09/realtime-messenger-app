import "dotenv/config";
import mongoose from "mongoose";
import { seedUsers } from "./users.seed";
import { seedChats } from "./chats.seed";
import { seedMessages } from "./messages.seed";

const MONGO_URI = process.env.MONGO_URI!;

const runSeed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");

    // ✅ FIX HERE
    await mongoose.connection.db!.dropDatabase();

    const users = await seedUsers();
    const chats = await seedChats(users);
    await seedMessages(chats, users);

    console.log("Seeding completed ✅");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed ❌", error);
    process.exit(1);
  }
};

runSeed();
