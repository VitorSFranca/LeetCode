function createCounter(n: number): () => number {
    let total = n;
    return function() {
        return total++;
    }
}

const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
