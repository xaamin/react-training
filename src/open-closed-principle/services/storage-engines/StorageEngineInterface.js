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

export default StorageEngineInterface;