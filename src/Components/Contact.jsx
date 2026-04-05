import { useState } from "react";
import { APIsRequestService } from "../Services/APIsRequestService";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
     
        const response = await APIsRequestService.contactUsAPI({ name, email, service, message });
     
       const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
      } else {
         toast.error(data.error || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
       toast.error(data.error || "Error");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <section className="min-h-screen pt-52 pb-20 px-6 md:px-16 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <ToastContainer />
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Let’s create <br /><span className="text-green-500">something amazing.</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Have a project idea or looking to collaborate? Send a message and I’ll respond within 24 hours.
          </p>
        </div>

        <div className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 p-4 rounded-2xl border-none focus:ring-2 focus:ring-green-500 outline-none" required />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 p-4 rounded-2xl border-none focus:ring-2 focus:ring-green-500 outline-none" required />
            </div>

            <select value={service} onChange={(e) => setService(e.target.value)}
              className="bg-gray-50 p-4 rounded-2xl border-none focus:ring-2 focus:ring-green-500 outline-none" required>
              <option value="">Select Service</option>
              <option>Web Development</option>
              <option>Cloud Solutions</option>
              <option>Other</option>
            </select>

            <textarea rows="4" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)}
              className="bg-gray-50 p-4 rounded-2xl border-none focus:ring-2 focus:ring-green-500 outline-none" required />

           
            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-green-500 text-white rounded-2xl font-bold text-lg hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;