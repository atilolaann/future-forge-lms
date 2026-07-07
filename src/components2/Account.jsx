import { useState, useEffect } from "react";
import { toast } from "sonner";
import Navbar from "../components2/Navbar.jsx";
import Sidebar from "../components2/Sidebar.jsx";

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
    <div className="w-full overflow-x-hidden min-h-screen bg-gray-50/30">
      <Navbar userData={userData} />
      <div className="flex">
        <Sidebar />
        <div className="m-4 md:m-8 w-full md:flex-1">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Account
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-1">
              Manage your profile and account settings
            </p>
          </div>

          <div className="max-w-4xl space-y-6">
            {/* PROFILE CARD: Avatar and details */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_10px_30px_rgba(245,158,11,0.04)] p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-orange-200/30 transition-colors duration-500"></div>
              
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-orange-500 to-orange-400 text-white flex items-center justify-center text-3xl font-bold shadow-[0_8px_20px_rgba(245,158,11,0.25)] ring-4 ring-orange-50 shrink-0 select-none">
                {userData?.fullName ? userData.fullName.charAt(0).toUpperCase() : "?"}
              </div>
              
              <div className="text-center sm:text-left flex-1 z-10">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{userData?.fullName || "Loading..."}</h3>
                <p className="text-sm text-gray-500 mt-1 flex items-center justify-center sm:justify-start gap-1.5">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {userData?.email}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-600 border border-orange-100/50 text-xs px-3 py-1 rounded-full font-medium shadow-xs">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    {userData?.trackId?.name || "Enrolling..."}
                  </span>
                </div>
              </div>
            </div>

            {/* DETAILS CARD */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_10px_30px_rgba(245,158,11,0.04)] p-6 md:p-8 space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h4 className="text-lg font-bold text-gray-900">Profile Information</h4>
                <p className="text-xs text-gray-500 mt-1">Review your enrollment details and modify editable credentials.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name (Locked) */}
                <div className="flex flex-col gap-1.5 p-4 rounded-xl border border-gray-100 bg-gray-50/50 relative">
                  <span className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase select-none">
                    Locked
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </span>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Full Name</label>
                  <div className="flex items-center gap-2.5 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{userData?.fullName || "—"}</span>
                  </div>
                </div>

                {/* Email Address (Locked) */}
                <div className="flex flex-col gap-1.5 p-4 rounded-xl border border-gray-100 bg-gray-50/50 relative">
                  <span className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase select-none">
                    Locked
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </span>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                  <div className="flex items-center gap-2.5 mt-1 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 truncate">{userData?.email || "—"}</span>
                  </div>
                </div>

                {/* Enrolled Track (Locked) */}
                <div className="flex flex-col gap-1.5 p-4 rounded-xl border border-gray-100 bg-gray-50/50 relative">
                  <span className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase select-none">
                    Locked
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </span>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Enrolled Track</label>
                  <div className="flex items-center gap-2.5 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{userData?.trackId?.name || "—"}</span>
                  </div>
                </div>

                {/* Username (Editable) */}
                <div className="flex flex-col gap-1.5 p-4 rounded-xl border border-orange-100 bg-orange-50/5 shadow-[0_2px_8px_rgba(245,158,11,0.01)] transition-all hover:shadow-[0_4px_12px_rgba(245,158,11,0.04)] focus-within:ring-2 focus-within:ring-orange-500/10 focus-within:border-orange-500 relative group">
                  <span className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-bold text-orange-500 uppercase select-none">
                    Editable
                    <svg className="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                  </span>
                  <label className="text-xs font-bold uppercase tracking-wider text-orange-500">Username</label>
                  <div className="flex items-center gap-2.5 mt-1 border-b border-gray-200 focus-within:border-orange-500 transition-colors py-0.5">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      className="w-full bg-transparent border-none outline-none text-sm font-semibold text-gray-800 placeholder-gray-400 focus:ring-0 p-0"
                    />
                  </div>
                </div>

                {/* Phone Number (Editable) */}
                <div className="flex flex-col gap-1.5 p-4 rounded-xl border border-orange-100 bg-orange-50/5 shadow-[0_2px_8px_rgba(245,158,11,0.01)] transition-all hover:shadow-[0_4px_12px_rgba(245,158,11,0.04)] focus-within:ring-2 focus-within:ring-orange-500/10 focus-within:border-orange-500 relative group md:col-span-2">
                  <span className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-bold text-orange-500 uppercase select-none">
                    Editable
                    <svg className="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                  </span>
                  <label className="text-xs font-bold uppercase tracking-wider text-orange-500">Phone Number</label>
                  <div className="flex items-center gap-2.5 mt-1 border-b border-gray-200 focus-within:border-orange-500 transition-colors py-0.5">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      maxLength={11}
                      value={phoneNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        setPhoneNumber(value);
                      }}
                      className="w-full bg-transparent border-none outline-none text-sm font-semibold text-gray-800 placeholder-gray-400 focus:ring-0 p-0"
                    />
                  </div>
                </div>
              </div>

              {/* SAVE CHANGES BUTTON */}
              <div className="flex justify-end pt-4 border-t border-gray-100">
                <button
                  onClick={handleUpdate}
                  disabled={!hasChanges || isSaving}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2.5 px-6 rounded-xl shadow-[0_4px_15px_rgba(245,158,11,0.25)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.35)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer flex items-center gap-2"
                >
                  {isSaving ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Saving...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Save Changes
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Account;
