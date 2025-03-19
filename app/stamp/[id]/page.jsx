import { getStamp } from "@/app/libs/stamps";
import { notFound } from "next/navigation";
import StampDetail from "@/app/components/stamps/stamp_detail";
import connectDB from "@/config/database";
import Stamp from "@/models/stamp.model";

export default async function Detail({ params }) {
  // const slugParam = await params;
  // if (!slugParam || !slugParam.slug) return notFound();

  await connectDB()
  const stamp = await Stamp.findById(params.id)

  if (!stamp) {
    notFound();
  }

  return <StampDetail stamp={stamp} />;
}
