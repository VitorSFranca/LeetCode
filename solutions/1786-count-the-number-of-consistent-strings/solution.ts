function countConsistentStrings(allowed: string, words: string[]): number {
    let count = 0;
    for(let i = 0; i < words.length; i++){
        let valid = true;
        for(let j = 0; j < words[i].length && valid; j++){
            valid = allowed.includes(words[i][j])
        }
        if(valid) count++
    }
    return count;
};
