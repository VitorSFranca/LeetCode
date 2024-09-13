function xorQueries(arr: number[], queries: number[][]): number[] {
    return queries.reduce((acc, cur, index) => {
        let result = arr[cur[0]];
        for(let i = cur[0] + 1; i <= cur[1]; i++){
            result = result ^ arr[i];
        }
        acc.push(result);
        return acc;
    }, []);
};
