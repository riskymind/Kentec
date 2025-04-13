"use client";

import { useSession } from "next-auth/react";
import { SocialLink } from "./social_link";
import { socialLinks } from "../app/config";
import { FaWhatsapp } from "react-icons/fa6";

const StampWhatsAppBtn = ({ image }) => {
  const { data: session } = useSession();

  const message = `Hello! I'm interested in this image: ${image}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `${socialLinks.whatsapp}?text=${encodedMessage}`;

  return (
    <div>
      {session?.user && (
        <SocialLink
          href={whatsappUrl}
          icon={FaWhatsapp}
          size={34}
          color={"25D366"}
        />
      )}
    </div>
  );
};

export default StampWhatsAppBtn;
