"use client";

import image_1 from "@/public/images/image_1.jpeg";
import image_2 from "@/public/images/image_2.jpeg";
import image_3 from "@/public/images/image_3.jpeg";
import image_5 from "@/public/images/image_5.jpeg";
import image_6 from "@/public/images/image_6.jpeg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const show_images = [
  { image: image_1, alt: "image 1" },
  { image: image_2, alt: "image 2" },
  { image: image_3, alt: "image 3" },
  { image: image_6, alt: "image 6" },
  { image: image_5, alt: "image 5" },
];

export default function ImageSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < show_images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ rotate: "0deg", opacity: 0 }}
      animate={{ rotate: "360deg", opacity: 1 }}
      exit={{ rotate: "0deg", opacity: 0 }}
      transition={{
        ease: "backInOut",
        duration: 1,
      }}
    >
      <div className="relative rounded-lg shadow-lg md:w-[25rem] w-[20rem] h-[25rem]">
        {show_images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image.image}
              alt={image.alt}
              width="0"
              height="0"
              priority
              className="w-full h-full rounded-lg drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)]"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
