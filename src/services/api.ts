import axios, { AxiosError, AxiosRequestConfig } from "axios";

import { IUser } from "../contexts/AuthContext";
import { StorageProvider } from "../providers";

interface IAxiosErrorConfig extends AxiosRequestConfig {
  _retry: boolean | undefined;
}

const storageProvider = new StorageProvider();

const api = axios.create({
  baseURL: "http://192.168.237.88:3333",
});

api.interceptors.request.use(
  async (config) => {
    try {
      const userString = await storageProvider.getStorage("@gbfoods");
      const user = userString ? (JSON.parse(userString) as IUser) : null;

      if (user && user.token) {
        config.headers["authorization"] = `Bearer ${user.token}`;
      }

      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalConfig = error.config as IAxiosErrorConfig;

    if (
      error.response &&
      error.response.status === 401 &&
      originalConfig.url !== "/refresh-token" &&
      !originalConfig._retry
    ) {
      originalConfig._retry = true;

      try {
        const userString = await storageProvider.getStorage("@gbfoods");
        const user = userString ? (JSON.parse(userString) as IUser) : null;

        if (!user || !user.refresh_token) {
          throw new Error("Refresh token não encontrado!");
        }

        const responseRefresh = await api.post("/refresh-token", {
          token: user.refresh_token,
        });

        const { token, refresh_token } = responseRefresh.data;

        const userUpdatted: IUser = {
          ...user,
          token,
          refresh_token,
        };

        await storageProvider.setStorage(
          "@gbfoods",
          JSON.stringify(userUpdatted)
        );

        return api(originalConfig);
      } catch (errorRefresh) {
        await storageProvider.deleteStorage("@gbfoods");
        return Promise.reject(errorRefresh);
      }
    }

    return Promise.reject(error);
  }
);

export { api };
