function genericfun(val) {
    console.log("Type of 0:" + typeof val[0]);
    console.log("Type of 1:" + typeof val[1]);
    console.log("Type of 2:" + typeof val[2]);
    console.log("Type of 3:" + typeof val[3]);
    return val;
}
var numb = [1, 5, 6, 8];
console.log(genericfun(numb));
var str = ["s", "h", "i", "v"];
console.log(genericfun(str));
