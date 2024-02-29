type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
  return new Promise(resolve => resolve(Promise.all([promise1, promise2]).then(([p1,p2]) => p1 + p2)))
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
