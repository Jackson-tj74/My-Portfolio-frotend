import { useState } from "react";
import { Save, X } from "lucide-react";
import { APIsRequestService } from "../../../Services/APIsRequestService";
import { toast, ToastContainer } from "react-toastify";

function EditProfileModal({ user, onClose }) {
  const [formData, setFormData] = useState({
    ...user,
    file: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(file),
        file,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await APIsRequestService.EditProfileAPI({
        avatar: formData.file,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
      });

      const data = await res.json();
      if (!res.ok) return toast.error(data.message);

      toast.success(data.message);
      setTimeout(() => window.location.reload(), 2000);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row gap-10">
      <ToastContainer />

      <div className="flex flex-col items-center">
        <img src={formData.image} className="w-32 h-32 rounded-full border-4 border-[#34C759]" />

        <label className="mt-3 cursor-pointer text-[#34C759] border px-4 py-2 rounded">
          Change Photo
          <input type="file" hidden onChange={handleImageChange} />
        </label>
      </div>

      <div className="flex-1 space-y-4">
        {['name','email','phone','location'].map((field)=> (
          <input
            key={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field}
            className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#34C759]"
          />
        ))}

        <div className="flex gap-4">
          <button className="flex-1 bg-[#34C759] text-white py-3 rounded-xl flex justify-center gap-2">
            <Save /> Save
          </button>

          <button type="button" onClick={onClose} className="flex-1 bg-gray-200 py-3 rounded-xl flex justify-center gap-2">
            <X /> Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditProfileModal;