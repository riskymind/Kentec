import Image from "next/image";
import connectDB from "@/config/database";
import Stamp from "@/models/stamp.model";
import { getSessionUser } from "@/utils/getSessionUser";
import profileDefault from "@/app/assets/profile.png";
import { convertToSerializeableObject } from "@/utils/convertToObject";
import ProfileStamps from "@/app/components/ProfileStamps"

const ProfilePage = async () => {
  await connectDB();
  const sessionUser = await getSessionUser();
  const { userId } = sessionUser;

  if (!userId) {
    throw new Error("User ID is required.");
  }

  const stampDocs = await Stamp.find({ owner: userId }).lean();
  const stamps = stampDocs.map(convertToSerializeableObject);

  return (
    <section>
      <div className="container m-auto py-24">
        <div className="bg-white/50 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4 text-gray-200">
            Your Profile
          </h1>
          <div className="flex flex-col md:flex-row relative">
            <div className="md:w-1/4 mx-20 mt-10 flex flex-col justify-start items-center">
              <div className="mb-4">
                <Image
                  className="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0"
                  src={sessionUser.user.image || profileDefault}
                  width={200}
                  height={200}
                  alt="User"
                />
              </div>

              <h2 className="text-2xl mb-4 text-gray-300">
                <span className="font-bold block text-gray-200">Name: </span>{" "}
                {sessionUser.user.name}
              </h2>
              <h2 className="text-2xl text-gray-300">
                <span className="font-bold block text-gray-200">Email: </span>{" "}
                {sessionUser.user.email}
              </h2>
            </div>

            <div className="md:w-3/4 md:pl-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-200">
                Your Listings
              </h2>
              {stamps.length === 0 ? (
                <p>You have no property listings</p>
              ) : (
                <ProfileStamps stamps={stamps} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
