type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let result = init;

    nums.forEach((n) => {
        result = fn(result, n);
    })

    return result;
};
