function findMinDifference(timePoints: string[]): number {
    let result = Infinity;

    const minutesArray = timePoints.map(time => {
        const [h, m] = time.split(':').map(Number);
        return h * 60 + m;
    });

    minutesArray.sort((a, b) => a - b);

    for (let i = 1; i < minutesArray.length; i++) {
        result = Math.min(result, minutesArray[i] - minutesArray[i - 1]);
    }

    result = Math.min(result, 1440 - (minutesArray[minutesArray.length - 1] - minutesArray[0]));
    return result;
}
