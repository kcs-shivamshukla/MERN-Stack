

//  Normal functions.

function addNumber(a: number, b: number): number {
    return a + b;
}

function addString(a: string, b: string): string {
    return a + b;
}




function addNumbersOrString(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;

    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}




function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
   return a + b;
}


function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}
console.log("Sum of 2 numbers: "+sum(80,20));
console.log("Sum of 3 numbers: "+sum(60,50,30));
console.log("Sum of 2 numbers from user 3rd is optional: "+sum(10,50,));

// **Method overloading inside the class.
class sumCLS {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}

let obje = new sumCLS();

console.log("Number: "+obje.count()); // return a number
console.log("Array of number: "+obje.count(10)); // return an array