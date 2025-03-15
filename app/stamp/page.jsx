import { Stamps } from "@/app/components/stamps/stamps";
import { Suspense } from "react";
import LoadingBar from "../components/loader";

export default async function ArtPage() {
  return (
    <div className="mt-10">
      <Suspense fallback={<LoadingBar />}>
        <Stamps/>
      </Suspense>
    </div>
  );
}
