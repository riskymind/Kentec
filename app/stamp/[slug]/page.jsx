import { getStamp } from "@/app/libs/stamps";
import { notFound } from "next/navigation";
import StampDetail from "@/app/components/stamps/stamp_detail";

export default async function Detail({ params }) {
  const slugParam = await params;
  if (!slugParam || !slugParam.slug) return notFound();

  const stamp = await getStamp(slugParam.slug);

  if (!stamp) {
    notFound();
  }

  return <StampDetail stamp={stamp} />;
}
