import { notFound } from "next/navigation";
import StampDetail from "@/components/stamps/stamp_detail";
import connectDB from "@/config/database";
import Stamp from "@/models/stamp.model";
import BackButton from "@/components/back_btn";
import { convertToSerializeableObject } from "@/utils/convertToObject";

export default async function Detail({ params }) {
  const { id } = await params;
  await connectDB();
  const stampDoc = await Stamp.findById(id).lean();
  const stamp = convertToSerializeableObject(stampDoc);

  if (!stamp) {
    notFound();
  }

  return (
    <>
      <BackButton className="mt-4 border-dotted border-2 py-2 px-4 rounded-md flex items-center gap-2">
        Back
      </BackButton>
      <section>
        <div>
          <div>
            <StampDetail stamp={stamp} />
          </div>
        </div>
      </section>
    </>
  );
}
