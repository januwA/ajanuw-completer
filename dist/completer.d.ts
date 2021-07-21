declare abstract class _Completer<T> {
    abstract promise: Promise<T>;
    isCompleted: boolean;
    protected abstract _res: (value: T | PromiseLike<T>) => void;
    protected abstract _rej: (reason?: any) => void;
    abstract complete(value: T): void;
    abstract completeError(error: any): void;
}
export declare class Completer<T> extends _Completer<T> {
    protected _res: (value: T | PromiseLike<T>) => void;
    protected _rej: (reason?: any) => void;
    promise: Promise<T>;
    constructor();
    complete(value: T): void;
    completeError(error: any): void;
}
export {};
//# sourceMappingURL=completer.d.ts.map