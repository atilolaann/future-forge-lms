function LogoutAlert({ showLogout, setShowLogout, handleLogout }) {
  if (!showLogout) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[400px]">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
          Ready to log out?
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
          Are you sure you want to log out? You will need to log in again to
          access your learning resources, recordings and progress.
        </p>

        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 sm:gap-3">
          <button
            onClick={() => setShowLogout(false)}
            className="bg-gray-300 text-gray-700 px-4 py-2 w-full sm:w-auto rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] text-white px-4 py-2 w-full sm:w-auto rounded-md hover:bg-orange-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
export default LogoutAlert;
