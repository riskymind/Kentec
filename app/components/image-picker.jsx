"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const ImagePicker = ({ label, name }) => {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div>
      {/* <label htmlFor={name} className="block text-gray-700 font-medium">{label}</label> */}
      <div>
        {!pickedImage && <p className="mb-2">Upload Image.</p>}
        {pickedImage && (
          <div className="mb-1">
            <Image
              src={pickedImage}
              width={100}
              height={100}
              alt="The image selected by the user."
              className="w-full h-full rounded-md"
            />
          </div>
        )}
      </div>
      <input
        type="file"
        name={name}
        accept="image/*"
        className="w-full p-2 border rounded-lg mt-1 hidden"
        required
        onChange={handleImageChange}
        ref={imageInput}
      />
      <button
        className="p-3 border border-gray-700 rounded-md hover:bg-gray-400 transition-all duration-100 ease-in"
        type="button"
        onClick={handlePickClick}
      >
        Choose File
      </button>
    </div>
  );
};

export default ImagePicker;
