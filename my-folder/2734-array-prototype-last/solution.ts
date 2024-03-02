declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function () {
  const arrayLength = this.length;
  return arrayLength > 0 ? this[arrayLength -1] : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export {};
