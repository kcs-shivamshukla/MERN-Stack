//SIngle dimensional Array
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var car = ["Mustang", "Hellfire", "Challenger"];
console.log("cars:" + car);
console.log("Car[0]:" + car[0]);
console.log("Car[1]:" + car[1]);
console.log("Car[2]:" + car[2]);
//Multi dimensional Array
var mult = [[1, 2, 3], [4, 5, 6]];
console.log(mult[0][0]);
console.log(mult[0][1]);
console.log(mult[0][2]);
console.log();
console.log(mult[1][0]);
console.log(mult[1][1]);
console.log(mult[1][2]);
//Array by using the array object
var arrO = new Array("Shivam", "Shukla", "SS");
for (var i = 0; i < arrO.length; i++) {
    console.log(arrO[i]);
}
//Passing arrays in function
var arrparse = new Array("Shivam", "Shiv", "Shi");
function arparse(arrparse) {
    for (var i_1 = 0; i_1 < arrparse.length; i_1++) {
        console.log(arrparse[i_1]);
    }
}
arparse(arrparse);
//Typescript spread operator
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var samear1 = __spreadArray([], ar1, true);
console.log(samear1);
var newar = __spreadArray(__spreadArray([], ar1, true), [7, 8], false);
console.log(newar);
var brandnewar = __spreadArray(__spreadArray([], ar1, true), ar2, true);
console.log(brandnewar);
