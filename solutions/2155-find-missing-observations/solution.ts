function missingRolls(rolls: number[], mean: number, n: number): number[] {
    const m = rolls.length;
    const totalSum = (m + n) * mean;
    const currentSum = rolls.reduce((acc, cur) => acc + cur, 0);
    const difference = totalSum - currentSum;

    // If difference is smaller than n (n times we got 1 in dice - smallest value)
    // Or if is grater than n * 6 (n times we got 6 in dice - max value)
    // Than that's invalid
    if(difference < n || difference > n * 6) return [];

    // Distribute value through array
    const missingRolls = Array.apply(null, Array(n)).map(() => Math.floor(difference/n));
    
    // Sum 1 until we are the leftover difference
    let missinngValue = difference % n;

    for(let i = 0; i < missinngValue; i++) {
        missingRolls[i]++
    }
    return missingRolls;
};

