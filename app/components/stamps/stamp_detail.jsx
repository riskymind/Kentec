import Image from "next/image";
import BookmarkButton from "../BookmarkButton";
import ShareButtons from "../ShareButtons";
import StampContactForm from "../StampContactForm";
import StampImages from "./StampImages";

export default function StampDetail({ stamp }) {
  return (
    <div>
      <main className="flex flex-col md:flex-row w-full md:justify-between mt-16 md:flex-wrap md:gap-8 gap-4">
        <div className="md:flex-2 rounded-lg">
          <h1 className="text-3xl font-bold tracking-wide text-center mb-4">
            {stamp.title}
          </h1>
          <p className="font-mono text-gray-400 mb-4 text-center">
            {stamp.description}
          </p>
          <StampImages images={stamp.image} />
        </div>

        <aside className="space-y-4 flex-1">
          <BookmarkButton stamp={stamp} />
          <ShareButtons stamp={stamp} />
          <StampContactForm stamp={stamp} />
        </aside>
      </main>
    </div>
  );
}
