function minBitFlips(start: number, goal: number): number {
    let xor = start ^ goal;
    let counter = 0;
    
    while (xor > 0) {
        counter += xor & 1;
        xor >>= 1;
    }
    
    return counter;
}
