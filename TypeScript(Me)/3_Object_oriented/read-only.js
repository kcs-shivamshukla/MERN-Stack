var Per = /** @class */ (function () {
    function Per(birthDate) {
        this.birthDate = birthDate;
    }
    return Per;
}());
var person = new Per(new Date(2000, 9, 13));
console.log("Person Date: " + person.birthDate);
