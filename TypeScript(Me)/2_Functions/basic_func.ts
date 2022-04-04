function sum(a:number,b:number):number {
    return a + b;
}

function showMess(mese:string):void {
    console.log(mese.toUpperCase());
}

let addnum:(d:number, c:number)=>number;

let addnum1 = function(x:number, y:number) {
    return x+y;
}

let addnum2:(a:number, b:number)=>number = 
    function(x:number, y:number) {
        return x+y;
    }

console.log(sum(11,55));
console.log(showMess("I am Me."));
console.log(addnum);
console.log(addnum1(45,65));
console.log(addnum2(78,87));