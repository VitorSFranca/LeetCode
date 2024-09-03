function isPalindrome(x: number): boolean {
    let result = true;
    const word = String(x);
    for (let i = 0; i < word.length / 2 && result; i++) {
        result = word[i] == word[word.length - 1 - i]
    }
    return result;
};
