// Union Variable
var valu;
valu = 12;
console.log("Numeric:" + valu);
valu = "Shukla";
console.log("String:" + valu);
//Union with array
var arra;
var i;
arra = [1, 46, 69];
console.log("Numeric array:");
for (i = 0; i < arra.length; i++) {
    console.log(arra[i]);
}
arra = ["Shivam", "Shukla"];
console.log("String Array:");
for (i = 0; i < arra.length; i++) {
    console.log(arra[i]);
}
//union in function
function unionfun(nam) {
    if (typeof nam == "string") {
        console.log(nam);
    }
    else {
        var i;
        for (i = 0; i < nam.length; i++) {
            console.log(nam[i]);
        }
    }
}
unionfun("Shivam Shukla");
unionfun(["Shivam", "Shukla"]);
