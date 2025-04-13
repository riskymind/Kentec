import connectDB from "@/config/database";
import Stamp from "@/models/stamp.model";
import { convertToSerializeableObject } from "@/utils/convertToObject";
import SearchForm from "@/components/Searchform";
import StampItem from "@/components/stamps/stamp-item";
import BackButton from "@/components/back_btn";

const SearchResultsPage = async ({ searchParams }) => {
  const searchQuery = searchParams?.searchQuery || "";

  await connectDB();

  const queryPattern = new RegExp(searchQuery, "i");

  let query = {
    $or: [{ title: queryPattern }, { description: queryPattern }],
  };

  const stampQueryResults = await Stamp.find(query).lean();
  const stamps = stampQueryResults.map(convertToSerializeableObject);

  return (
    <section>
      <div className="flex items-center flex-wrap">
        <BackButton className="mt-4 border-dotted border-2 py-2 px-4 rounded-md flex items-center gap-2">
          Back
        </BackButton>
        <SearchForm />
      </div>
      <div className="container-xl lg:container m-auto px-4 py-6">
        <h1 className="text-2xl mb-4">Search Results</h1>
        {stamps.length === 0 ? (
          <p className="text-red-500 text-center text-xl">
            No search result found.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stamps.map((stamp) => (
              <StampItem
                key={stamp._id}
                _id={stamp._id}
                title={stamp.title}
                description={stamp.description}
                image={stamp.image}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchResultsPage;
