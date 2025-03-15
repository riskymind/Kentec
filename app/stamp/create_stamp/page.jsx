"use client";

import { useState } from "react";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, image });

    // TODO: Handle form submission (e.g., upload to server)
  };

  return (
    <div className="max-w-3xl mx-auto mt-16 p-6 bg-white/50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Post a New Stamped Floor
      </h1>
      <p className="text-gray-800 text-center mt-2">
        Share your concrete stamped floor design with others on the home page.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a catchy title"
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the stamped floor"
            className="w-full p-3 mt-1 border rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 font-medium">Upload Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="w-full p-2 border rounded-lg mt-1"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-700 text-white font-medium p-3 rounded-lg hover:bg-gray-900 transition-all"
        >
          Post Stamped Floor
        </button>
      </form>
    </div>
  );
}
