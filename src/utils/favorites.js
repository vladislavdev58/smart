import {setStorage, getStorageAsObject} from './localStorage'

export const addFavorite = (keyStorage, data) => {
    const dataStorage = localStorage.getItem(keyStorage)
    if (!dataStorage && data) {
        setStorage(keyStorage, [data])
        return true
    }
    const storageData = getStorageAsObject(keyStorage)
    if (!storageData.includes(data)) {
        storageData.push(data)
        setStorage(keyStorage, storageData)
        return true
    }
    return false
}

export const removeFavorite = (keyStorage, data) => {
    const storageData = getStorageAsObject(keyStorage)
    if (storageData && data.includes(data)) {
        storageData.splice(storageData.indexOf(data), 1)
        setStorage(keyStorage, storageData)
        return true
    }
    return false
}

export const checkFavorite = (keyStorage, value) => {
    const dataStorage = getStorageAsObject(keyStorage)
    if (dataStorage) {
        return getStorageAsObject(keyStorage).includes(value)
    }
}

