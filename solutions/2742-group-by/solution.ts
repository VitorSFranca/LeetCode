declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
  }
}

Array.prototype.groupBy = function (fn) {
  const result = {};
  this.forEach((e) => {
    const key = fn(e);
    if(result[key]) result[key].push(e);
    else result[key] = [e];
  })
  return result;
};
