var Per = /** @class */ (function () {
    function Per(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Per.prototype.showPersonDetails = function () {
        console.log("Person Details: " + this.firstName + " " + this.lastName);
    };
    return Per;
}());
var obj = new Per("Abhishek", "Pujara");
obj.showPersonDetails();
