var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ** By Using Super
var parentClass = /** @class */ (function () {
    function parentClass() {
    }
    parentClass.prototype.display = function () {
        console.log("Display method from Parent Class!");
    };
    return parentClass;
}());
var childClass = /** @class */ (function (_super) {
    __extends(childClass, _super);
    function childClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    childClass.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("dislay method from Child Class!");
    };
    childClass.prototype.hello = function () {
        console.log("Hello from Child Class!");
    };
    return childClass;
}(parentClass));
var parentObj = new parentClass();
parentObj.display();
var childObj = new childClass();
childObj.display();
childObj.hello();
// ** Without Using Super
var parentClass2 = /** @class */ (function () {
    function parentClass2() {
    }
    parentClass2.prototype.display = function () {
        console.log("Display method from Parent Class!");
    };
    return parentClass2;
}());
var childClass2 = /** @class */ (function (_super) {
    __extends(childClass2, _super);
    function childClass2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    childClass2.prototype.display = function () {
        console.log("dislay method from Child Class!");
    };
    childClass2.prototype.hello = function () {
        console.log("Hello from Child Class!");
    };
    return childClass2;
}(parentClass2));
var parentObj = new parentClass();
parentObj.display();
var childObj = new childClass();
childObj.display();
childObj.hello();
