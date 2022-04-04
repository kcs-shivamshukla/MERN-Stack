var global = 12;

class funCLS {
    nume = 12;
    static staticvar = 45;

    demo():void {
        var localvar = 25;
        console.log("Local Variable:"+localvar);
    }
}

console.log("Global Number:" +global);

console.log("Static:"+funCLS.staticvar);

var obje = new funCLS();
console.log("Class Variable:"+obje.nume);

obje.demo();
