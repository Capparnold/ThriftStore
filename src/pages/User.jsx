import { useUser, useClerk } from "@clerk/clerk-react";

export default function User() {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-lg text-gray-500">Please sign in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm text-center">
        {/* Profile Image */}
        <img
          src={user.imageUrl}
          alt="User"
          className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-sm object-cover"
        />

        {/* Name and Email */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {user.fullName || "User"}
        </h2>
        <p className="text-gray-600 mb-6">
          {user.primaryEmailAddress?.emailAddress}
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => openUserProfile()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Edit Profile
          </button>

          <button
            onClick={() => signOut({ redirectUrl: "/" })}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}