// I'm actually proud of my solution and how quick I got it :)
function largestNumber(nums: number[]): string {
    const result = nums.map(x => x.toString()).sort((a, b) =>
        Number(b + a) - Number(a + b)
    ).join("");

    return result[0] === "0" ? "0" : result;
};
