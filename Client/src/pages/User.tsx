
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../graphQL/mutations/register_login";
import Auth from "../utils/auth";

function User() {
  const [deleteUser] = useMutation(DELETE_USER);



  const handleDeleteUser = async () => {
    try {
      await deleteUser();
      Auth.logout();
      
      window.location.href = "/";
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-8 py-16">
      <div className="w-full max-w-5xl text-center border-4 border-gray-400 rounded-xl p-12 bg-white shadow-lg">
        {Auth.loggedIn() ? (
          <>
            <div className="text-black font-bold">
              UserName: {Auth.getProfile().data.username}!
              <div>
              Email: {Auth.getProfile().data.email}!
              </div>
            </div>
            <button
              onClick={handleDeleteUser}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
            >
              Delete Account
            </button>
          </>
        ) : (
          <p className="text-2xl text-gray-800 font-semibold leading-relaxed">
            Your account has been deleted.
          </p>
        )}
      </div>
    </div>
  );
}

export default User;
