class Per {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

let person = new Per(new Date(2000, 9, 13));
console.log("Person Date: "+person.birthDate);