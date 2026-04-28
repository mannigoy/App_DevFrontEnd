import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUsername = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("email");

    if (savedToken && savedUsername) {
      setToken(savedToken);
      setUser({ username: savedUsername, email: savedEmail });
    }
    setLoading(false);
  }, []);

  const login = (email, username, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
    setToken(token);
    setUser({ username, email });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
