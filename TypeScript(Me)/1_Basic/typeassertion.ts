//Using Bracket
let eCode:any = 111;
let emcode = <number> eCode;
console.log("Type is:"+typeof(emcode));

// Using as

let ecode1:any = 11;
let emcode1 = ecode1 as number;
console.log("Type is:"+typeof(emcode1));

//Interface as declaration

interface per {
    name: string;
    code: number;
}

let pe = <per> { };
pe.code = 45;
pe.name = "Shivam";
console.log(pe.code+ " "+ pe.name);