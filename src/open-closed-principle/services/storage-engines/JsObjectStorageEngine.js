class StorageEngineInterface {
    get(index) {
        throw new Error('Not implemented');
    }

    all() {
        throw new Error('Not implemented');
    }

    put(index, value) {
        throw new Error('Not implemented');
    }

    delete(index) {
        throw new Error('Not implemented');
    }

    clear() {
        throw new Error('Not implemented');
    }
}

class JsObjectStorageEngine extends StorageEngineInterface {

    data = {}

    get(index) {
        return this.data[index]
    }

    all() {
        return this.data
    }

    put(index, value) {
        this.data[index] = value
    }

    delete(index) {
        delete this.data[index]
    }

    clear() {
        this.data = {}
    }
}

export default JsObjectStorageEngine;