import React, { createContext, useContext, useState, ReactNode } from "react";

interface IUserContext {
  user: { id: number; name: string; role: string } | null;
  login: (userData: { id: number; name: string; role: string }) => void;
  logout: () => void;
}

const AuthContext = createContext<IUserContext | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ id: number; name: string; role: string } | null>(null);

  const login = (userData: { id: number; name: string; role: string }) => {
    setUser(userData);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");z
  }
  return context;
};
