var global = 12;
var funCLS = /** @class */ (function () {
    function funCLS() {
        this.nume = 12;
    }
    funCLS.prototype.demo = function () {
        var localvar = 25;
        console.log("Local Variable:" + localvar);
    };
    funCLS.staticvar = 45;
    return funCLS;
}());
console.log("Global Number:" + global);
console.log("Static:" + funCLS.staticvar);
var obje = new funCLS();
console.log("Class Variable:" + obje.nume);
obje.demo();
