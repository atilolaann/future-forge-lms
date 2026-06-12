function LogoutAlert({showLogout, setShowLogout, handleLogout}) {
    if (!showLogout) return null;

    return (
       <div className="fixed inset-0 bg-black/50  flex items-center justify-center z-50">
        <div className="bg-white  rounded-lg p-6 w-[400]">
            <h2 className="text-xl font-semibold mb-4">
                Ready to log out?
            </h2>
            <p className="text-gray-600 mb-6">
                Are you sure you want to log out?
                You will need to log in again to access your learning resources, recordings and progress.
            </p>

            <div className="flex justify-end gap-3">
                <button
                onClick={() => setShowLogout(false)}

                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">
                    Cancel
                </button>
                <button
                onClick={handleLogout}
                 className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500">
                    Logout
                </button>
            </div>
        </div>
       </div>
    );
}
export default LogoutAlert;