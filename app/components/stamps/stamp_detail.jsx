import { SocialLink } from "@/app/components/social_link";
import { socialLinks } from "@/app/config";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import BackButton from "@/app/components/back_btn";
import Image from "next/image";

export default function StampDetail({ stamp }) {
  return (
    <div>
      <BackButton className="mt-4 border-dotted border-2 py-2 px-4 rounded-md">
        back
      </BackButton>
      <main className="flex w-full justify-between mt-16 flex-wrap md:gap-8 gap-4">
        <div className="h-[25rem] md:flex-1 rounded-lg bg-red-400">
          <Image
            src={stamp.image[0]}
            width={100}
            height={100}
            alt={stamp.title}
            className="w-full h-full rounded-lg drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)]"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="text-center flex flex-col gap-3">
            <h1 className="text-3xl font-bold tracking-wide">{stamp.title}</h1>
            <p className="font-mono text-gray-400">{stamp.description}</p>
          </div>
          <div className="w-full p-4 text-center">
            <h3 className="text-center font-extrabold text-rose-500">
              Contact us
            </h3>
            <div className="flex justify-center gap-3">
              <SocialLink href={socialLinks.whatsapp} icon={FaWhatsapp} size={34} color={"25D366"}/>

              <SocialLink href={socialLinks.email} icon={MdEmail} size={34} color={""}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
