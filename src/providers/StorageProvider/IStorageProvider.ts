interface IStorageProvider {
  setStorage(key: string, data: string): Promise<void>;
  getStorage(key: string): Promise<string>;
  deleteStorage(key: string): Promise<void>;
}

export { IStorageProvider };
