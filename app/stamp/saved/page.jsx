import StampItem from "@/components/stamps/stamp-item";
import connectDB from "@/config/database";
import User from "@/models/user.model";
import Stamp from "@/models/stamp.model";
import { getSessionUser } from "@/utils/getSessionUser";

const SavedStampPage = async () => {
  await connectDB();
  const sessionUser = await getSessionUser();
  const { userId } = sessionUser;

  const { bookmarks } = await User.findById(userId)
    .populate("bookmarks")
    .lean();

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <h1 className="text-2xl mb-4">Saved Stamps</h1>
        {bookmarks.length === 0 ? (
          <p>No saved stamps</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookmarks.map((stamp) => (
              // console.log(stamp)
              <StampItem
                key={stamp._id}
                _id={stamp._id}
                title={stamp.title}
                description={stamp.description}
                image={stamp.image}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedStampPage;
