import { useState, createContext, useContext } from "react";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const login = (userName) => {
    setUserName(userName);
  };
  const logout = () => {
    setUserName(null);
  };
  return (
    <AuthContext.Provider value={{ userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
