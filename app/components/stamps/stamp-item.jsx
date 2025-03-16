import Image from "next/image";
import Link from "next/link";
import { SocialLink } from "@/app/components/social_link";
import { socialLinks } from "@/app/config";
import { FaWhatsapp } from "react-icons/fa6";

export default function StampItem({ title, slug, image, description }) {
  return (
      <article className="flex flex-col gap-2 bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
        <header className="w-full h-100">
          <div className="h-full">
            <Image
              src={image}
              alt={title}
              width={100}
              height={100}
              priority
              className="w-full h-full"
            />
          </div>
        </header>

        <div className="text-start pl-2">
          <div className="flex items-center">
            <h2 className="text-2xl">{title}</h2>{" "}
          </div>
          <p className="text-sm text-gray-400 line-clamp-1">{description}</p>
          <div className="flex items-center justify-between pr-2 my-2">
            <div className="bg-gray-200 p-2 rounded-md hover:bg-gray-600">
              <Link
                href={`/stamp/${slug}`}
                className="text-gray-950 hover:text-white"
              >
                View Details
              </Link>
            </div>
            <SocialLink href={socialLinks.whatsapp} icon={FaWhatsapp} />
          </div>
        </div>
      </article>
  );
}
