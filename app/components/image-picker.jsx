"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const ImagePicker = ({ label, name }) => {
  const imageInput = useRef();
  const [pickedImages, setPickedImages] = useState([]);

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const imageArray = [];

    Array.from(files).forEach((file) => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        imageArray.push(fileReader.result);
        if (imageArray.length === files.length) {
          setPickedImages(imageArray);
        }
      };
      fileReader.readAsDataURL(file);
    });
  }

  return (
    <div>
      <div>
        {pickedImages.length === 0 && <p className="mb-2">Upload Image.</p>}
        <div className="flex flex-wrap gap-2">
          {pickedImages.map((image, index) => (
            <div key={index} className="mb-1">
              <Image
                src={image}
                width="0"
                height="0"
                alt={`Selected image ${index + 1}`}
                sizes="100vw"
                className="w-36 h-36 rounded-md mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <input
        type="file"
        name={name}
        accept="image/*"
        className="w-full p-2 border rounded-lg mt-1 hidden"
        required
        multiple
        onChange={handleImageChange}
        ref={imageInput}
      />
      <button
        className="p-3 border border-gray-700 rounded-md hover:bg-gray-400 transition-all duration-100 ease-in mt-2"
        type="button"
        onClick={handlePickClick}
      >
        Choose File
      </button>
    </div>
  );
};

export default ImagePicker;
