// @flow

import JsObjectStorageEngine from './storage-engines/JsObjectStorageEngine'
import { StorageEngineInterface } from './storage-engines/StorageEngineInterface'

class Storage {

    _engines: Object = {};
    defaultEngine: string;

    storage: StorageEngineInterface;

    constructor(storage?: StorageEngineInterface, defaultEngine: string = 'default') {
        let _storage;

        if (!storage) {
            _storage = new JsObjectStorageEngine();
        } else {
            _storage = storage;
        }

        this.defaultEngine = defaultEngine;

        this._engines.default = _storage;
    }

    register(engine: string, implementation: StorageEngineInterface) {
        this._engines[engine] = implementation;
    }

    engines(): Object {
        return this._engines;
    }

    engine(engine: string): StorageEngineInterface {
        const _engine = this._engines[engine];

        if (!_engine) {
            throw new Error(`Engine ${engine} is not registered`);
        }

        return _engine;
    }

    getDefaultEngine(): StorageEngineInterface {
        return this.engine(this.defaultEngine);
    }

    get(index: string): mixed {
        return this.getDefaultEngine().get(index)
    }

    all(): Object {
        return this.getDefaultEngine().all()
    }

    put(index: string, value: mixed): void {
        this.getDefaultEngine().put(index, value)
    }

    delete(index: string): void {
        this.getDefaultEngine().delete(index)
    }

    clear(): void {
        this.getDefaultEngine().clear()
    }
}

export default Storage;