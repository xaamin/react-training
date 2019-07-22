// @flow

import { StorageEngineInterface } from './StorageEngineInterface'

class localStorageEngine implements StorageEngineInterface {

    get(index: string) : mixed {
        return localStorage.getItem(index)
    }

    all(): Object {
        let all = {};
        const keys = Object.keys(localStorage);
        let i = keys.length;

        while ( i-- ) {
            all[ keys[i] ] = localStorage.getItem( keys[i] );
        }

        return all;
    }

    put(index: string, value: mixed) : void {
        localStorage.setItem(index, value)
    }

    delete(index: string): void {
        localStorage.removeItem(index)
    }

    clear(): void {
        localStorage.clear()
    }
}

export default localStorageEngine;