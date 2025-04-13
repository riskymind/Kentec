"use server";
import connectDB from "@/config/database";
import Stamp from "@/models/stamp.model";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/config/cloudinary";
import { Readable } from "stream";

function bufferToStream(buffer) {
  return new Readable({
    read() {
      this.push(buffer)
      this.push(null)
    }
  })
}

async function uploadImageToCloudinary(imageFile) {
  const buffer = Buffer.from(await imageFile.arrayBuffer());

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "kentec_images" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      }
    );

    bufferToStream(buffer).pipe(stream);
  });
}

async function createStamp(formData) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const images = formData.getAll("image").filter((img) => img.name !== "");

  const stampData = {
    title: formData.get("title"),
    description: formData.get("description"),
    owner: userId,
  };

  const imageUrls = await Promise.all(images.map(uploadImageToCloudinary))

  stampData.image = imageUrls

  const newStamp = new Stamp(stampData);
  await newStamp.save();

  revalidatePath("/", "layout");
  redirect(`/stamp/${newStamp._id}`);
}

export default createStamp;
