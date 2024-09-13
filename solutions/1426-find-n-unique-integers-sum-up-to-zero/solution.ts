function sumZero(n: number): number[] {
    if(n === 1) return [0];
    const result = [];
    let lastN = 1;
    const isOdd = n % 2 === 0;
    for(let i =0; i < Math.floor(n/2); i++) {
        result.push(lastN);
        result.push(lastN*-1);
        lastN++;
    }
    if(!isOdd) {
        result[0] = lastN + 1;
        result.push(lastN * -1)
    }
    return result;
};
