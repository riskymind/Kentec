import connectDB from "@/config/database";
import StampsList from "./stampList";
import Stamp from "@/models/stamp.model";
import Pagination from "../Pagination";

export async function Stamps({ pageSize, page }) {
  await connectDB();
  const skip = (page - 1) * pageSize;
  const total = await Stamp.countDocuments({});
  const stamps = await Stamp.find({}).skip(skip).limit(pageSize).lean();
  
  const showPagination = total > pageSize;

  return (
    <section>
      {stamps.length === 0 ? (
        <p>No Stamps found.</p>
      ) : (
        <StampsList stamps={stamps} />
      )}
      {showPagination && (
        <Pagination
          page={parseInt(page)}
          pageSize={parseInt(pageSize)}
          totalItems={total}
        />
      )}
    </section>
  );
}
