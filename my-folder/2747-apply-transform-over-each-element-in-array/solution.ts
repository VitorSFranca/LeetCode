function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const newArray = [];

    arr.forEach((e,i) => {
        newArray.push(fn(e,i));
    })

    return newArray;
};
