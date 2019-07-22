// @flow

export interface StorageEngineInterface {
    get(index: string) : mixed;

    all(): Object;

    put(index: string, value: mixed) : void;

    delete(index: string) : void;

    clear() : void;
}