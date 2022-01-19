import AsyncStorage from "@react-native-async-storage/async-storage";

import { IStorageProvider } from "./IStorageProvider";

class StorageProvider implements IStorageProvider {
  async setStorage(key: string, data: string): Promise<void> {
    await AsyncStorage.setItem(key, data);
  }

  async getStorage(key: string): Promise<string> {
    return await AsyncStorage.getItem(key);
  }

  async deleteStorage(key: any): Promise<void> {
    await AsyncStorage.removeItem(key);
  }
}

export default StorageProvider;
