"use client";

import React, { createContext, useEffect, useState } from "react";
import { auth } from "@/lib/firebase-config";
import firebase from "firebase/app";

type User = firebase.User | null;

interface AuthContextProps {
  currentUser: User;
}

// Create an authentication context
export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up the authentication state observer
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup the observer on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    // You can show a loading spinner or splash screen here
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
