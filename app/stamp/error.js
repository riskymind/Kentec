"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="w-3/5 mx-auto border border-gray-500 mt-10">
      <h1 className="text-center text-2xl md:text-6xl text-rose-300">
        An Error occurred!.
      </h1>
      <p className="text-center text-sm text-rose-400">
        Failed to fetch stamp data. <Link href="/stamp"><span className="italic text-rose-700 hover:underline">Please try again later</span></Link>.
      </p>
    </div>
  );
}
