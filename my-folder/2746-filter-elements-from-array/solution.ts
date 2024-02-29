type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const newArr = [];
    arr.forEach((n, i) => {
        if(fn(n, i)) newArr.push(n)
    });

    return newArr;
};
