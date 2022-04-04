// tsc -t es5 Getter_Setter.ts
class person {
    private age1: number;
    
    public get age() {
        return this.age1;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 100) {
            throw new Error('The age is invalid');
        }
        this.age1 = theAge;
    }

    public getAge(): number {
        return this.age1;
    }
}

var personObj=new person();
personObj.age=110;
console.log(personObj.getAge());


