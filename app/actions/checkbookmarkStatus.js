"use server"
import connectDB from "@/config/database"
import User from "@/models/user.model"
import { getSessionUser } from "@/utils/getSessionUser"

async function checkBookmarkStatus(stampId) {
    await connectDB()

    const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    return { error: 'User ID is required' };
  }

  const { userId } = sessionUser;

  // Find user in database
  const user = await User.findById(userId);

  // Check if property is bookmarked
  let isBookmarked = user.bookmarks.includes(stampId);

  return { isBookmarked };

}

export default checkBookmarkStatus