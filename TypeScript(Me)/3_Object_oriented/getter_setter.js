// tsc -t es5 Getter_Setter.ts
var person = /** @class */ (function () {
    function person() {
    }
    Object.defineProperty(person.prototype, "age", {
        get: function () {
            return this.age1;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 100) {
                throw new Error('The age is invalid');
            }
            this.age1 = theAge;
        },
        enumerable: false,
        configurable: true
    });
    person.prototype.getAge = function () {
        return this.age1;
    };
    return person;
}());
var personObj = new person();
personObj.age = 110;
console.log(personObj.getAge());
