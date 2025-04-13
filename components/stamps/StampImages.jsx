"use client";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

const StampImages = ({ images }) => {
  return (
    <Gallery>
      <section className="p-4">
        <div className="container mx-auto">
          {images.length === 1 ? (
            <Item
              original={images[0]}
              thumbnail={images[0]}
              width="1000"
              height="600"
            >
              {({ ref, open }) => (
                <Image
                  src={images[0]}
                  alt=""
                  ref={ref}
                  onClick={open}
                  className="w-full h-[400px] mx-auto rounded-xl cursor-pointer"
                  width={800}
                  height={600}
                  priority={true}
                />
              )}
            </Item>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${
                    images.length === 3 && index === 2
                      ? "col-span-2"
                      : "col-span-1"
                  }`}
                >
                  <Item
                    original={image}
                    thumbnail={image}
                    width="1000"
                    height="600"
                  >
                    {({ ref, open }) => (
                      <Image
                        src={image}
                        alt=""
                        ref={ref}
                        onClick={open}
                        className="h-[400px] w-full rounded-xl cursor-pointer"
                        width={800}
                        height={600}
                        priority={true}
                      />
                    )}
                  </Item>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Gallery>
  );
};

export default StampImages;
