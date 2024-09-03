type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let initial = init;
    let current = init;
    return {
        increment: () => {
            current++;
            return current;
        },
        decrement: () => {
            current--;
            return current;
        },
        reset: () => {
            current = initial;
            return current;
        }
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
