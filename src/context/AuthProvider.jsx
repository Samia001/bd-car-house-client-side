import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allFirebaseContext = useFirebase();
  return (
    <AuthContext.Provider value={allFirebaseContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
