import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FaTrash } from "react-icons/fa";
import { APIsRequestService } from "../../Services/APIsRequestService";


const ContactsTable = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const response = await APIsRequestService.GetMessagesAPI();
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setMessages(data.data || []);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (messageId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this message?");
    if (!confirmDelete) return;

    try {
      const response = await APIsRequestService.DeleteMessageAPI(messageId);
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      toast.success(data.message);
      setMessages(messages.filter((msg) => msg._id !== messageId));
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (loading) return <p className="p-4">Loading messages...</p>;
  if (messages.length === 0) return <p className="p-4">No messages found.</p>;

  return (
    <div className="p-4">
      <ToastContainer />
      <h2 className="text-xl font-bold mb-4">Contacts Messages</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Subject</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg._id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-2 px-4">{msg.name}</td>
                <td className="py-2 px-4">{msg.email}</td>
                <td className="py-2 px-4">{msg.service}</td>
                <td className="py-2 px-4">{msg.message}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => handleDelete(msg._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactsTable;