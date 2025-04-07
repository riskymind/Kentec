import BackButton from "@/app/components/back_btn";
import ImagePicker from "@/app/components/image-picker";
import StampSubmitBtn from "@/app/components/stamps/submit_stamp_btn";
import createStamp  from "@/app/actions/addStamp";

export default function CreatePage() { 

  return (
    <div>
      <BackButton className="mt-4 border-dotted border-2 py-2 px-4 rounded-md flex items-center gap-2">
        Back
      </BackButton>
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white/50 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Post a New Stamped Floor
        </h1>
        <p className="text-gray-800 text-center mt-2 text-sm underline decoration-black underline-offset-8 decoration-dotted">
          Share your concrete stamped floor design with others on the home page.
        </p>

        <form className="mt-6 space-y-4" action={createStamp}>
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium">Title</label>
            <input
              type="text"
              id="title"
              name="title"
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
              placeholder="Describe the stamped floor"
              className="w-full p-3 mt-1 border rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
            <ImagePicker name="image"/>
          <StampSubmitBtn />
        </form>
      </div>
    </div>
  );
}
