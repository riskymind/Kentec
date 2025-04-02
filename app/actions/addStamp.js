"use server";
import connectDB from "@/config/database";
import Stamp from "@/models/stamp.model";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/config/cloudinary";

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

  const imageUrls = [];

  for (const imageFile of images) {
    const imageBuffer = await imageFile.arrayBuffer();
    const imageArray = Array.from(new Uint8Array(imageBuffer));
    const imageData = Buffer.from(imageArray);

    // Convert the image data to base64
    const imageBase64 = imageData.toString("base64");

    // Make request to upload to clodinary
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder: "kentec_images",
      }
    );
    imageUrls.push(result.secure_url);
  }

  stampData.image = imageUrls;

  const newStamp = new Stamp(stampData);
  await newStamp.save();

  revalidatePath("/", "layout");
  redirect(`/stamp/${newStamp._id}`);

  // const stamp = {
  //   title: formData.get("title"),
  //   description: formData.get("description"),
  //   image: formData.get("image"),
  // };
  // await saveStamp(stamp)
  // redirect("/stamp")
}

export default createStamp;
