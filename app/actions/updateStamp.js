"use server";

import connectDB from "@/config/database";
import Stamp from "@/models/stamp.model";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function updateStamp(stampId, formData) {
  await connectDB();

  const sessionUser = await getSessionUser();

  const { userId } = sessionUser;

  const existingStamp = await Stamp.findById(stampId);

  if (existingStamp.owner.toString() !== userId) {
    throw new Error("Unauthorized");
  }

  const stampData = {
    title: formData.get("title"),
    description: formData.get("description"),
    owner: userId,
  };

  const updatedStamp = await Stamp.findByIdAndUpdate(stampId, stampData)

  revalidatePath("/", "layout")
  redirect(`/stamp/${updatedStamp._id}`)
}

export default updateStamp
