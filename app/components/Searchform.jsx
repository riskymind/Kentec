"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery === "") {
      return;
      // router.push("/stamp")
    } else {
      const query = `?searchQuery=${searchQuery}`;
      router.push(`/stamp/search-results${query}`);
    }
  };

  return (
    <form
      className="mt-4 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="w-full md:w-3/5 md:pr-2 mb-2 md:mb-0">
        <label htmlFor="title" className="sr-only">
          Title of stamp
        </label>
        <input
          type="text"
          id="searchQuery"
          placeholder="Enter Keywords"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-gray-500"
        />
      </div>
      <button
        className="md:ml-2 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-500 transition-all duration-100 ease-in"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
