type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cache = new Map<String, any>();
    
    return function (...args) {
        const s = JSON.stringify(args);
        if (!cache.has(s)) cache.set(s, fn(...args));
        return cache.get(s);

    };
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
