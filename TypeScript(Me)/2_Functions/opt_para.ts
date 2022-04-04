function sum1(a: number, b: number, c?: number): number {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}

console.log(sum1(10,20,30));
console.log(sum1(10,20));
