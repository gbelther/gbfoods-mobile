import { createContext, ReactNode, useState } from "react";

import { api } from "../services/api";
import { ErrorHandling } from "../utils/errors/implementation/ErrorHandling";

interface ISignInProps {
  email: string;
  password: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  token: string;
}

interface IAuthContext {
  user: IUser;
  login(credentials: ISignInProps): Promise<void>;
}

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [data, setData] = useState<IUser>({} as IUser);

  const login = async ({ email, password }: ISignInProps): Promise<void> => {
    try {
      const response = await api.post("sessions", {
        email,
        password,
      });

      const { user, token } = response.data;
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const userData: IUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        token,
      };

      setData(userData);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user: data, login }}>
      {children}
    </AuthContext.Provider>
  );
};
