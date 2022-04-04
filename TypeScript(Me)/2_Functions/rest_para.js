function sum1() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log("No Arguments: " + sum1());
console.log("2 Arguments: " + sum1(30, 20));
console.log("3 Arguments: " + sum1(40, 30, 100));
