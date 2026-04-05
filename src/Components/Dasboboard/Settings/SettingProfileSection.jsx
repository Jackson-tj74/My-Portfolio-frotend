import { useState } from "react";
import { MapPin, Phone, Mail, User, User2Icon } from "lucide-react";
import { FaEdit } from "react-icons/fa";
import EditProfileModal from "./EditProfileModal";
import { useProfile } from "../../../Hooks/useProfileHooks";

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border hover:shadow-md transition">
    <div className="text-[#34C759]">{icon}</div>
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium text-gray-800">{value}</p>
    </div>
  </div>
);

function SettingProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const { data, loading } = useProfile();

  const userData = {
    name: data?.data?.name || "—",
    email: data?.data?.email || "—",
    phone: data?.data?.phone || "—",
    location: data?.data?.location || "—",
    image: data?.data?.avatar || "pic1.jpg",
  };

  if (loading) {
    return (
      <div className="p-10">
        <div className="bg-white rounded-2xl shadow p-10">Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-6 md:p-10 relative">

        {isEditing ? (
          <EditProfileModal
            user={{ ...data.data, ...userData }}
            onClose={() => setIsEditing(false)}
          />
        ) : (
          <>
            <div className="absolute top-4 right-4">
              <span className="bg-[#34C759]/20 text-[#34C759] px-4 py-1 rounded-full text-xs font-semibold">
                Premium
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
              <img
                src={userData.image}
                alt="profile"
                className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-[#34C759] object-cover shadow-lg"
              />

              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-6">{userData.name}</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InfoItem icon={<Mail />} label="Email" value={userData.email} />
                  <InfoItem icon={<Phone />} label="Phone" value={userData.phone} />
                  <InfoItem icon={<MapPin />} label="Location" value={userData.location} />
                  <InfoItem
                    icon={<User />}
                    label="Member Since"
                    value={data?.data?.createdAt ? new Date(data.data.createdAt).toLocaleDateString() : "—"}
                  />
                </div>

                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-8 bg-[#34C759] text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow hover:opacity-90"
                >
                  <FaEdit /> Edit Profile
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SettingProfileSection;