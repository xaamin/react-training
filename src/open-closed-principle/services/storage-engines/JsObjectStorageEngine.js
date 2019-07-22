// @flow

import { StorageEngineInterface } from './StorageEngineInterface'

class JsObjectStorageEngine implements StorageEngineInterface {

    data = {}

    get(index: string): mixed {
        return this.data[index]
    }

    all(): mixed {
        return this.data
    }

    put(index: string, value: mixed): void {
        this.data[index] = value
    }

    delete(index: string): void {
        delete this.data[index]
    }

    clear() {
        this.data = {}
    }
}

export default JsObjectStorageEngine;