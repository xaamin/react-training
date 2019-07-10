import JsObjectStorageEngine from './storage-engines/JsObjectStorageEngine'

class Storage {

    storage = null;

    constructor(storage = undefined) {
        if (!storage) {
            this.storage = new JsObjectStorageEngine();
        } else {
            this.storage = storage;
        }
    }

    setStrategy(storage) {
        this.storage = storage;
    }

    get(index) {
        return this.storage.get(index)
    }

    all() {
        return this.storage.all()
    }

    put(index, value) {
        this.storage.put(index, value)
    }

    delete(index) {
        this.storage.delete(index)
    }

    clear() {
        this.storage.clear()
    }
}

export default Storage;