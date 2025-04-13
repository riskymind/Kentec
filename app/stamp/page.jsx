import { Stamps } from "@/components/stamps/stamps";
import { Suspense } from "react";
import LoadingBar from "../../components/loader";

export default async function ArtPage(props) {
  const searchParams = (await props.searchParams) || {};
  const pageSize = Number(searchParams.pageSize || 9);
  const page = Number(searchParams.page || 1);
  return (
    <div className="mt-10">
      <Suspense fallback={<LoadingBar />}>
        <Stamps pageSize={pageSize} page={page} />
      </Suspense>
    </div>
  );
}
