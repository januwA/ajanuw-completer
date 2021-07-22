class _Completer {
    isCompleted = false;
}
export class Completer extends _Completer {
    _res;
    _rej;
    promise;
    constructor() {
        super();
        this.promise = new Promise((res, rej) => {
            this._res = res;
            this._rej = rej;
        });
    }
    complete(value) {
        if (this.isCompleted)
            throw Error("Promise already completed");
        this._res(value);
        this.isCompleted = true;
    }
    completeError(error) {
        if (this.isCompleted)
            throw Error("Promise already completed");
        this._rej(error);
        this.isCompleted = true;
    }
}
