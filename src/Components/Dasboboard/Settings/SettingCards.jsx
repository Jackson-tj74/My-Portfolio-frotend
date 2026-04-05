import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { FaShieldAlt, FaBell, FaLock } from "react-icons/fa";
import { APIsRequestService } from "../../../Services/APIsRequestService";

const SettingsCard = () => {
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    if (!window.confirm("Delete account?")) return;

    try {
      const res = await APIsRequestService.DeleteAccountAPI();
      const data = await res.json();

      if (!res.ok) return toast.error(data.message);

      toast.success(data.message);
      localStorage.clear();

      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="p-6">
      <ToastContainer />

      <div className="grid md:grid-cols-2 gap-6">

        {/* Security */}
        <div className="bg-white rounded-3xl shadow p-6 hover:shadow-lg transition">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#34C759]/20 p-3 rounded-full">
              <FaShieldAlt className="text-[#34C759]" />
            </div>
            <div>
              <h2 className="font-semibold">Security</h2>
              <p className="text-sm text-gray-500">Manage security</p>
            </div>
          </div>

          <button className="w-full p-3 border rounded-xl mb-3 flex gap-2">
            <FaLock /> Change Password
          </button>

          <button className="w-full p-3 border rounded-xl flex gap-2">
            <FaShieldAlt /> 2FA
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-3xl shadow p-6 hover:shadow-lg transition">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#34C759]/20 p-3 rounded-full">
              <FaBell className="text-[#34C759]" />
            </div>
            <h2 className="font-semibold">Notifications</h2>
          </div>

          {["Email", "SMS", "Marketing"].map((item, i) => (
            <label key={i} className="flex justify-between mb-3">
              {item}
              <input type="checkbox" className="accent-[#34C759]" defaultChecked />
            </label>
          ))}
        </div>
      </div>

      {/* Danger */}
      <div className="mt-10 bg-red-50 border border-red-200 p-6 rounded-3xl">
        <h2 className="text-red-600 font-semibold mb-2">Danger Zone</h2>
        <button
          onClick={handleDeleteAccount}
          className="bg-red-500 text-white px-6 py-3 rounded-xl"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default SettingsCard;