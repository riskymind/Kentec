import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export const SubmitMessageButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
    >
      <FaPaperPlane /> {pending ? "Sending..." : "Send Message"}
    </button>
  );
};
