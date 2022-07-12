import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeAuth } from "../services/FakeAuth";

export interface AuthContextParam {
  token: string | null;
  error: Error | null;
  handleLogin: (name: string, password: string) => void;
  handleLogout: () => void;
}

export const AuthContext = createContext<AuthContextParam | null>(null);

export interface AuthProviderInterface {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthProviderInterface> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const navigate = useNavigate();

  const handleLogin = async (name: string, password: string) => {
    try {
      const token = await fakeAuth({ name, password });
      setToken(token);
      navigate("/dragons");
    } catch (error: any) {
      setError(error);
      setToken(null);
    }
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, handleLogin, handleLogout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext) as AuthContextParam;
