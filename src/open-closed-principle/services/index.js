// @flow

import StorageService from './Storage'

import LocalStorageEngine from './storage-engines/LocalStorageEngine'
import JsObjectStorageEngine from './storage-engines/JsObjectStorageEngine'

const Storage = new StorageService();

Storage.register('json', new JsObjectStorageEngine())
Storage.register('localStorage', new LocalStorageEngine())

export {
    Storage
}