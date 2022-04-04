//  Normal functions.
function addNumber(a, b) {
    return a + b;
}
function addString(a, b) {
    return a + b;
}
function addNumbersOrString(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}
function add(a, b) {
    return a + b;
}
function sum(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
console.log("Sum of 2 numbers: " + sum(80, 20));
console.log("Sum of 3 numbers: " + sum(60, 50, 30));
console.log("Sum of 2 numbers from user 3rd is optional: " + sum(10, 50));
// **Method overloading inside the class.
var sumCLS = /** @class */ (function () {
    function sumCLS() {
        this.current = 0;
    }
    sumCLS.prototype.count = function (target) {
        if (target) {
            var values = [];
            for (var start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    };
    return sumCLS;
}());
var obje = new sumCLS();
console.log("Number: " + obje.count()); // return a number
console.log("Array of number: " + obje.count(10)); // return an array
