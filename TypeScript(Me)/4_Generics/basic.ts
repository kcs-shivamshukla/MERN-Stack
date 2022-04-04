function genericfun<S>(val: S[]): S[] {

    console.log("Type of 0:" +typeof val[0]);
    console.log("Type of 1:" +typeof val[1]);
    console.log("Type of 2:" +typeof val[2]);
    console.log("Type of 3:" +typeof val[3]);
    return val;
}

let numb = [1, 5, 6, 8];
console.log(genericfun<number>(numb));

let str = ["s", "h", "i", "v"];
console.log(genericfun<string>(str));