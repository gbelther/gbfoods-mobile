import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "../services/api";
import { StorageProvider } from "../providers";

interface ISignInProps {
  email: string;
  password: string;
}

interface IRegisterProps {
  name: string;
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
  user: IUser | null;
  login(credentials: ISignInProps): Promise<void>;
  logout(): Promise<void>;
  register(data: IRegisterProps): Promise<void>;
}

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const storageProvider = new StorageProvider();

  const [data, setData] = useState<IUser>(null);

  useEffect(() => {
    const getDataInStorage = async () => {
      try {
        const dataStorageString = await storageProvider.getStorage("@gbfoods");
        const dataStorageJson = JSON.parse(dataStorageString) as IUser;

        setData(dataStorageJson);
      } catch (error) {
        console.log(error);
      }
    };

    getDataInStorage();
  }, []);

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

      await storageProvider.setStorage("@gbfoods", JSON.stringify(userData));
      setData(userData);
    } catch (error) {
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await storageProvider.deleteStorage("@gbfoods");
      setData(null);
    } catch (error) {
      throw error;
    }
  };

  const register = async ({ name, email, password }): Promise<void> => {
    try {
      await api.post("/users", {
        name,
        email,
        password,
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user: data, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
