"use server"
import cloudinary from "@/config/cloudinary"
import connectDB from "@/config/database"
import Stamp from "@/models/stamp.model"
import { getSessionUser } from "@/utils/getSessionUser"
import { revalidatePath } from "next/cache"

async function deleteStamp(stampId) {
    
    const sessionUser = await getSessionUser()

    if(!sessionUser || !sessionUser.userId) {
        throw new Error("User ID is required.")
    }

    const { userId } = sessionUser

    await connectDB()

    const stamp = await Stamp.findById(stampId)

    if(!stamp) throw new Error("Stamp not found.")
    

    if(stamp.owner.toString() !== userId) {
        throw new Error("Unauthorized")
    }

    const publicIds = stamp.image.map((imageUrl)=> {
        const parts = imageUrl.split("/")
        return parts.at(-1).split(".").at(0)
    })

    if(publicIds.length > 0) {
        for (let publicId of publicIds) {
            await cloudinary.uploader.destroy("kentec_images/", + publicId)
        }
    }

    await stamp.deleteOne()

    revalidatePath("/", "layout")
}

export default deleteStamp