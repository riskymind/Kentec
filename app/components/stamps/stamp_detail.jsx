import Image from "next/image";
import BookmarkButton from "../BookmarkButton";
import ShareButtons from "../ShareButtons";
import StampContactForm from "../StampContactForm";

export default function StampDetail({ stamp }) {
  return (
    <div>
      <main className="flex flex-col md:flex-row w-full md:justify-between mt-16 md:flex-wrap md:gap-8 gap-4">
        <div className="md:h-[25rem] md:flex-2 rounded-lg">
          <h1 className="text-3xl font-bold tracking-wide text-center mb-4">
            {stamp.title}
          </h1>
          <p className="font-mono text-gray-400 mb-4 text-center">
            {stamp.description}
          </p>
          <Image
            src={stamp.image[0]}
            width={100}
            height={100}
            alt={stamp.title}
            className="w-full h-full rounded-lg drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)]"
          />
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
