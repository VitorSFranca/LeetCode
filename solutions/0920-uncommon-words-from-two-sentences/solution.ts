function uncommonFromSentences(s1: string, s2: string): string[] {
    const result = [];
    const as1 = s1.split(" ");
    const as2 = s2.split(" ");
    for (let i = 0; i < as1.length; i++) {
        const word = as1[i];
        if (as2.indexOf(word) < 0 && as1.filter(x => x == word)?.length == 1) result.push(word);
    }
    for (let i = 0; i < as2.length; i++) {
        const word = as2[i];
        if (as1.indexOf(word) < 0 && as2.filter(x => x == word)?.length == 1) result.push(word);
    }

    return result;
};
