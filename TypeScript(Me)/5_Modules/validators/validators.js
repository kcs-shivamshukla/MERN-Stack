"use strict";
exports.__esModule = true;
exports.ValidatorCLS = void 0;
// import { Constants } from '../constant/constant'
var ValidatorCLS = /** @class */ (function () {
    function ValidatorCLS() {
    }
    ValidatorCLS.prototype.isValidStr = function (s, regex) {
        return regex.test(s);
        // return regex.test(s) && minlength===8;
    };
    return ValidatorCLS;
}());
exports.ValidatorCLS = ValidatorCLS;
