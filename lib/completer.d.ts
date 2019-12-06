declare abstract class _Completer<T> {
    abstract promise: Promise<T>;
    /**
     * * [promise] 是否完成
     * * 反映是否已调用[complete]或[completeError]
     * * 当此值为true时，[complete]和[completeError]不得再次调用。
     */
    isCompleted: boolean;
    protected abstract _res: (value?: T) => void;
    protected abstract _rej: (error?: any) => void;
    abstract complete(value: T): void;
    abstract completeError(error: any): void;
}
/**
 * Example
 * ```ts
 * let _data: Completer<number> = new Completer<number>();
 * _data.promise
 *   .then(v => {
 *     console.log(v); // 233
 *   })
 *   .catch(er => {
 *     console.log(er);
 *   });
 *
 * setTimeout(() => {
 *   _data.complete(233);
 *   console.log(_data.isCompleted); // true
 * }, 2000);
 * ```
 */
export declare class Completer<T> extends _Completer<T> {
    protected _res: (value?: T | undefined) => void;
    protected _rej: (error?: any) => void;
    promise: Promise<T>;
    /**
     * TODO: 未实现
     */
    constructor();
    complete(value: T): void;
    completeError(error: any): void;
}
export {};
