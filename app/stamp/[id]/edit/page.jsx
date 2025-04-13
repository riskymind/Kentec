import BackButton from "@/components/back_btn";
import ImagePicker from "@/components/image-picker";
import StampSubmitBtn from "@/components/stamps/submit_stamp_btn";
import updatedStamps from "@/app/actions/updateStamp";
import connectDB from "@/config/database";
import Stamp from "@/models/stamp.model";
import { convertToSerializeableObject } from "@/utils/convertToObject";

export default async function EditPage({ params }) {
  const id = await params;
  await connectDB();

  const stampDoc = await Stamp.findById(id).lean();
  const stamp = convertToSerializeableObject(stampDoc);

  if (!stamp) {
    return (
      <>
        <BackButton className="mt-4 border-dotted border-2 py-2 px-4 rounded-md flex items-center gap-2">
          Back
        </BackButton>

        <h1 className="text-center text-2xl font-bold mt-10">
          Stamp not found.
        </h1>
      </>
    );
  }

  const updateStampById = updatedStamps.bind(null, stamp._id);

  return (
    <div>
      <BackButton className="mt-4 border-dotted border-2 py-2 px-4 rounded-md flex items-center gap-2">
        Back
      </BackButton>
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white/50 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Update Stamped Floor
        </h1>
        <p className="text-gray-800 text-center mt-2 text-sm underline decoration-black underline-offset-8 decoration-dotted">
          Share your concrete stamped floor design with others on the home page.
        </p>

        <form className="mt-6 space-y-4" action={updateStampById}>
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={stamp.title}
              placeholder="Enter a catchy title"
              className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={stamp.description}
              placeholder="Describe the stamped floor"
              className="w-full p-3 mt-1 border rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
          {/* <ImagePicker name="image" /> */}
          <StampSubmitBtn />
        </form>
      </div>
    </div>
  );
}
