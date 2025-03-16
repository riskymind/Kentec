"use client";
import { useFormStatus } from "react-dom";

export default function StampSubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full bg-gray-700 text-white font-medium p-3 rounded-lg hover:bg-gray-900 transition-all"
    >
      { pending ? "Submitting...." : "Post Stamped Floor"}
    </button>
  );
}
