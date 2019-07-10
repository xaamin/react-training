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

    get(index) {
        return localStorage.getItem(index)
    }

    all() {
        let all = {};
        const keys = Object.keys(localStorage);
        let i = keys.length;

        while ( i-- ) {
            all[ keys[i] ] = localStorage.getItem( keys[i] );
        }

        return all;
    }

    put(index, value) {
        return localStorage.setItem(index, value)
    }

    delete(index) {
        return localStorage.removeItem(index)
    }

    clear() {
        return localStorage.clear()
    }
}

export default JsObjectStorageEngine;