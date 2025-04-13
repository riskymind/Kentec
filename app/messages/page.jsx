import connectDB from "@/config/database";
import Message from "@/models/message.model";
import { convertToSerializeableObject } from "@/utils/convertToObject";
import { getSessionUser } from "@/utils/getSessionUser";
import MessageCard from "../../components/MessageCard";

const MessagePage = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();

  const { userId } = sessionUser;

  const readMessages = await Message.find({ recipient: userId, read: true })
    .sort({ createdAt: -1 })
    .populate("sender", "username")
    .populate("stamp", "name")
    .lean();

  const unreadMessages = await Message.find({ recipient: userId, read: false })
    .sort({ createdAt: -1 })
    .populate("sender", "username")
    .populate("stamp", "name")
    .lean();

  const messages = [...unreadMessages, ...readMessages].map((messageDoc) => {
    const message = convertToSerializeableObject(messageDoc);
    message.sender = convertToSerializeableObject(messageDoc.sender);
    message.stamp = convertToSerializeableObject(messageDoc.stamp);
    return message;
  });

  return (
    <section className="bg-black/20">
      <div className="container m-auto py-24 max-w-6xl">
        <div className="bg-white/20 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Message</h1>
          <div className="space-y-4">
            {messages.length === 0 ? (
              <p className="text-bold text-gray-800">You have no Messages</p>
            ) : (
              messages.map((message) => <MessageCard message={message} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagePage;
