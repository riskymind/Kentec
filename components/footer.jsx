"use client";

import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "@/app/config";
import { SocialLink } from "./social_link";

const YEAR = new Date().getFullYear();


export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}
      <a
        className="no-underline"
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        Kentec
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
        <SocialLink href={socialLinks.twitter} icon={FaXTwitter} size={18} color={"FFFFFF"}/>
        <SocialLink href={socialLinks.instagram} icon={FaInstagram} size={18} color={"FFFFFF"}/>
        <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} size={18} color={"FFFFFF"}/>
        <SocialLink href={socialLinks.email} icon={TbMailFilled} size={18} color={"FFFFFF"}/>
      </div>
    </small>
  );
}
