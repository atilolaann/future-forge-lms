function LogoutAlert({ showLogout, setShowLogout, handleLogout }) {
  if (!showLogout) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-7 w-full max-w-[400px] border border-gray-100">
        <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">
          Ready to log out?
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mb-5 sm:mb-6 leading-relaxed">
          Are you sure you want to log out? You will need to log in again to
          access your learning resources, recordings and progress.
        </p>

        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5 sm:gap-3">
          <button
            onClick={() => setShowLogout(false)}
            className="bg-gray-100 text-gray-700 px-5 py-2.5 w-full sm:w-auto rounded-xl hover:bg-gray-200 transition-colors duration-150 text-sm font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] text-white px-5 py-2.5 w-full sm:w-auto rounded-xl hover:shadow-[0_4px_15px_rgba(245,137,30,0.4)] transition-all duration-150 text-sm font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
export default LogoutAlert;
