"use server"
import connectDB from "@/config/database"
import User from "@/models/user.model"
import { getSessionUser } from "@/utils/getSessionUser"
import { revalidatePath } from "next/cache"

async function bookmarkStamp(stampId) {
    await connectDB()
    const sessionUser = await getSessionUser()

    if(!sessionUser || !sessionUser.userId) {
        return {error: "User ID is required"}
    }

    const {userId} = sessionUser

    const user = await User.findById(userId)

    let isBookmarked = user.bookmarks.includes(stampId)
    console.log(isBookmarked);

    let message;

    if(isBookmarked) {
        user.bookmarks.pull(stampId)
        message = "Bookmark Removed successfully"
        isBookmarked = false
    }else {
        user.bookmarks.push(stampId)
        message = "Bookmark added successfully"
        isBookmarked = true
    }

    console.log(message);

    await user.save()
    revalidatePath("/stamp/saved", "page")
    return {message, isBookmarked}
}

export default bookmarkStamp