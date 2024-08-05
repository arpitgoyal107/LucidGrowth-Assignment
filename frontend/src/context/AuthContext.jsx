import React, { useState, useContext, createContext, useEffect } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to manage authentication state
export default function AuthProvider({ children }) {
  // Retrieve token from localStorage
  const initialAuthUser = localStorage.getItem("token");

  // Initialize state with the retrieved token or undefined
  const [authUser, setAuthUser] = useState(initialAuthUser || undefined);

  // Update localStorage whenever authUser changes
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("token", authUser);
    } else {
      localStorage.removeItem("token");
    }
  }, [authUser]);

  // Provide authUser and setAuthUser to children components
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
