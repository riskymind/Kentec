import Image from "next/image";
import connectDB from "@/config/database";
import Stamp from "@/models/stamp.model";
import { getSessionUser } from "@/utils/getSessionUser";
import profileDefault from "@/app/assets/profile.png";
import { convertToSerializeableObject } from "@/utils/convertToObject";
import ProfileStamps from "@/app/components/ProfileStamps";

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
      <h1 className="text-3xl font-bold my-4 text-gray-300 text-center">Your Profile</h1>
      <div className="container m-auto py-8">
        <div className="bg-gray-800 px-6 py-8 mb-4 shadow-md rounded-md border border-gray-300 m-4 md:m-0">
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
              <h2 className="text-2xl text-gray-300 underline underline-offset-4">
                {sessionUser.user.email}
              </h2>
            </div>

            <div className="md:w-3/4 md:pl-4 md:mt-0 mt-4">
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
