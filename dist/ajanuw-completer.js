(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.AjanuwCompleter = {}));
}(this, (function (exports) { 'use strict';

  class _Completer {
      constructor() {
          /**
           * * [promise] 是否完成
           * * 反映是否已调用[complete]或[completeError]
           * * 当此值为true时，[complete]和[completeError]不得再次调用。
           */
          this.isCompleted = false;
      }
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
  class Completer extends _Completer {
      /**
       * TODO: 未实现
       */
      // static sync() {}
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

  exports.Completer = Completer;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ajanuw-completer.js.map
