function sum1(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log("No Arguments: "+sum1());
console.log("2 Arguments: "+sum1(30, 20)); 
console.log("3 Arguments: "+sum1(40, 30, 100)); 