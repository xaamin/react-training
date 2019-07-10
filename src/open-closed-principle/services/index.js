import StorageService from './Storage'

import JsObjectStorageEngine from './storage-engines/JsObjectStorageEngine'
import LocalStorageEngine from './storage-engines/LocalStorageEngine'

const Storage = new StorageService(new JsObjectStorageEngine());

export {
    Storage
}