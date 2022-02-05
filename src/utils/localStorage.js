export const getStorageAsObject = (keyStorage) => JSON.parse(localStorage.getItem(keyStorage))

export const setStorage = (keyStorage, storageData) => {
    localStorage.setItem(keyStorage, JSON.stringify(storageData))
}