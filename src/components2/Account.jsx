import { useState, useEffect } from "react";
import { toast } from "sonner";
import Navbar from "../components2/Navbar.jsx";
import Sidebar from "../components2/Sidebar.jsx";
import Lock from "../assets/Lock.png";
import edit from "../assets/edit.png";

function Account() {
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [originalNickname, setOriginalNickname] = useState("");
  const [originalPhoneNumber, setOriginalPhoneNumber] = useState("")
  const [isSaving, setIsSaving] = useState(false);

  const token = localStorage.getItem("token");

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://lms-be-kc72.onrender.com/api/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        if (data && data.data){
        setUserData(data.data);

        setNickname(data.data.nickname || "");
        setPhoneNumber(data.data.phoneNumber||"");

        setOriginalNickname(data.data.nickname || "");
        setOriginalPhoneNumber(data.data.phoneNumber||"");
        }
      });
  }, []);

   //profile fetch
   useEffect(() => {
    fetch(`${"https://lms-be-kc72.onrender.com/api"}/users/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          setUserData(data.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching resources:", err);
      });
  }, [token]);


    const hasChanges = 
      nickname !== originalNickname ||
      phoneNumber !== originalPhoneNumber;

  const handleUpdate = async () => {
  if (!hasChanges) {
    toast.info("No changes made");
    return;
  }

  try {
    setIsSaving(true);

    const response = await fetch(
      "https://lms-be-kc72.onrender.com/api/users/profile",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          nickname,
          phoneNumber,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      setOriginalNickname(nickname);
      setOriginalPhoneNumber(phoneNumber);

      toast.success("Profile updated successfully!");

      console.log(data);
    } else {
      toast.error("Failed to update profile");
    }
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong");
  } finally {
    setIsSaving(false);
  }
};

   
  return (
    // ADDED: w-full and overflow-x-hidden to prevent horizontal scrolling on mobile devices
    <div className="w-full overflow-x-hidden">
      <Navbar userData={userData} />
      {/* Side-by-side layout for Sidebar and Content */}
      <div className="flex">
        <Sidebar />
        {/* CHANGED: Reduced margin on mobile (m-4), restored original on medium screens (md:m-8). Added md:flex-1 to take up remaining space. */}
        <div className="m-4 md:m-8 w-full md:flex-1">
          <div className="">
            {/* CHANGED: Text size and padding reduced for mobile, restored for md */}
            <h2 className="text-2xl md:text-3xl font-bold pb-2 md:pb-3">
              Account
            </h2>
            {/* CHANGED: Text size reduced for mobile, restored for md */}
            <p className="pb-4 md:pb-8 text-sm md:text-base">
              Manage your profile and account setting
            </p>
          </div>

          <div className="">
            {/* CHANGED: Text size and padding adjusted for mobile vs medium screens */}
            <h2 className="text-xl md:text-2xl font-bold py-4 md:py-6">
              Profile Information
            </h2>

            {/* CHANGED: Removed strict w-[507]. Made it w-full on mobile, and lg:max-w-[507px] on large screens to preserve your original width constraint safely. Adjusted padding/margin for mobile. */}
            <div className="m-0 sm:m-2 p-4 md:p-6 w-full lg:max-w-[507] border-gray-300 rounded-lg shadow-inner h-full">
              {/* CHANGED: flex-col on mobile so the label stacks above the value. sm:flex-row places them side-by-side on larger screens. */}
              <div className="flex flex-col sm:flex-row w-full sm:items-center">
                {/* CHANGED: w-full on mobile, sm:w-48 on larger screens. Adjusted vertical padding. */}
                <p className="w-full sm:w-48 text-gray-800 py-2 sm:py-6">
                  Full name
                </p>
                <div className="flex items-center gap-2  w-full sm:flex-1">
                  {/* CHANGED: text-sm on mobile, sm:text-base on larger screens */}
                  <p className="text-sm sm:text-base">{userData?.fullName}</p>
                  {/* ADDED: flex-shrink-0 so the icon doesn't get squeezed on small screens */}
                  <img src={Lock} className="w-5 h-5 shrink-0" alt="" />
                </div>
              </div>

              {/* CHANGED: Same flex-col to sm:flex-row stacking logic as above */}
              <div className="flex flex-col sm:flex-row w-full sm:items-center">
                <p className="w-full sm:w-48 text-gray-800 py-2 sm:py-6">
                  Email Address
                </p>
                <div className="flex items-center gap-2  w-full sm:flex-1">
                  {/* ADDED: break-all on mobile so long email addresses don't break the layout, sm:break-normal to reset it */}
                  <p className="text-sm sm:text-base break-all sm:break-normal">
                    {userData?.email}
                  </p>
                  <img src={Lock} className="w-5 h-5 shrink-0" alt="" />
                </div>
              </div>

              {/* CHANGED: Same flex-col to sm:flex-row stacking logic */}
              <div className="flex flex-col sm:flex-row w-full sm:items-center py-2 sm:py-6">
                <p className="w-full sm:w-48 text-gray-800 pb-2 sm:pb-0">
                  Enrolled Track
                </p>
                <div className="flex items-center gap-2  w-full sm:flex-1">
                  <p className="text-sm sm:text-base">
                    {" "}
                    {userData?.trackId?.name}
                  </p>
                  <img src={Lock} className="w-5 h-5 shrink-0" alt="" />
                </div>
              </div>

              {/* CHANGED: Same flex-col to sm:flex-row stacking logic */}
              <div className="flex flex-col sm:flex-row w-full sm:items-center py-2 sm:py-6">
                <p className="w-full sm:w-48 text-gray-800 pb-2 sm:pb-0">
                  Username
                </p>
                <div className="flex items-center gap-2  w-full sm:flex-1">
                  {/* ADDED: w-full so the input stretches properly. Adjusted text size for mobile. */}
                  <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="border rounded p-2 w-full max-w-sm text-sm sm:text-base"
                  />
                  <img src={edit} className="w-5 h-5 shrink-0" alt="" />
                </div>
              </div>

              {/* CHANGED: Same flex-col to sm:flex-row stacking logic */}
              <div className="flex flex-col sm:flex-row w-full sm:items-center py-2 sm:py-6">
                <p className="w-full sm:w-48 text-gray-800 pb-2 sm:pb-0">
                  Phone Number
                </p>
                <div className="flex items-center gap-2 w-full sm:flex-1">
                  {/* ADDED: w-full to input for proper stretching */}
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="border rounded p-2 w-full max-w-sm text-sm sm:text-base"
                  />

                  <img src={edit} className="w-5 h-5 shrink-0" alt="" />
                </div>
              </div>

              {/* CHANGED: Added mt-4 for mobile spacing, mt-0 on sm to reset. w-full makes it stretch across the mobile screen, sm:w-auto returns it to normal size. */}
              <button
                onClick={handleUpdate}
                disabled = {!hasChanges|| isSaving }
                className="bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] text-white px-4 py-2 mt-4 sm:mt-0 rounded w-full sm:w-auto
                disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {isSaving? "Saving...":"Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Account;
