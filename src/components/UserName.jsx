import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const UserName = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  // Default image URL if user picture is not available
  const defaultDp = "/images/default.jpg"; // Make sure the image is in the public/images folder

  return (
    <div className="bg-gray-100 p-6">
      {isAuthenticated ? (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full text-center">
          <img 
            src={user.picture || defaultDp}  // Use default image if no user picture
            alt={user.name} 
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-red-700"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            👋🏻 {user.name}
          </h2>

          
        </div>
      ) : null}
    </div>
  );
}

export default UserName;
