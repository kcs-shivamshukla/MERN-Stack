//SIngle dimensional Array

let car: Array<string> = ["Mustang","Hellfire","Challenger"];
console.log("cars:" +car);
console.log("Car[0]:" +car[0]);
console.log("Car[1]:" +car[1]);
console.log("Car[2]:" +car[2]);

//Multi dimensional Array

let mult: number [][] = [[1,2,3],[4,5,6]];
console.log(mult[0][0]);
console.log(mult[0][1]);
console.log(mult[0][2]);
console.log();
console.log(mult[1][0]);
console.log(mult[1][1]);
console.log(mult[1][2]);

//Array by using the array object
let arrO: string[] = new Array("Shivam","Shukla","SS");
for(var i = 0;i<arrO.length;i++) {
    console.log(arrO[i]);
}

//Passing arrays in function

let arrparse:string[] = new Array("Shivam","Shiv","Shi");

function arparse(arrparse:string[]) {
    for(let i=0;i<arrparse.length;i++) {
        console.log(arrparse[i]);
    }
}

arparse(arrparse);

//Typescript spread operator
let ar1=[1,2,3];
let ar2=[4,5,6];

let samear1 = [...ar1];
console.log(samear1);

let newar = [...ar1,7,8];
console.log(newar);

let brandnewar = [...ar1, ...ar2];
console.log(brandnewar);
