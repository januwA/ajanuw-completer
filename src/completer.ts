abstract class _Completer<T> {
  abstract promise: Promise<T>;
  /**
   * * [promise] 是否完成
   * * 反映是否已调用[complete]或[completeError]
   * * 当此值为true时，[complete]和[completeError]不得再次调用。
   */
  isCompleted: boolean = false;

  protected abstract _res: (value: T | PromiseLike<T>) => void;
  protected abstract _rej: (reason?: any) => void;

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
export class Completer<T> extends _Completer<T> {
  protected _res!: (value: T | PromiseLike<T>) => void;
  protected _rej!: (reason?: any) => void;
  public promise: Promise<T>;

  /**
   * TODO: 未实现
   */
  // static sync() {}

  constructor() {
    super();
    this.promise = new Promise<T>((res, rej) => {
      this._res = res;
      this._rej = rej;
    });
  }

  complete(value: T): void {
    if (this.isCompleted) throw Error("Promise already completed");
    this._res(value);
    this.isCompleted = true;
  }

  completeError(error: any) {
    if (this.isCompleted) throw Error("Promise already completed");
    this._rej(error);
    this.isCompleted = true;
  }
}
