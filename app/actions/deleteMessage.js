"use server";
import connectDB from "@/config/database";
import Message from "@/models/message.model";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function deleteMessage(messageId) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.user) {
    throw new Error("User ID is required.");
  }

  const { userId } = sessionUser;

  const message = await Message.findById(messageId);

  if (!message) throw new Error("Message not found.");

  if (message.recipient.toString() !== userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  revalidatePath("/messages", "page");
  await message.deleteOne();
}

export default deleteMessage;
