"use strict";
exports.__esModule = true;
exports.Constants = void 0;
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    Constants.zipcode = /^[0-9]{6,12}$/;
    Constants.number = /^[0-9]{10}$/;
    return Constants;
}());
exports.Constants = Constants;
