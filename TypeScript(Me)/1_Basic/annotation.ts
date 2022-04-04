//Annotation as a parameter
function annot(id: number, nm: string) {
    console.log("Id :"+id + "Name: "+nm);
}

annot(6, "Shukla");

//Inline Annotation

var human : {
    id: number;
    nm: string;
};

human =  {
    id: 2,
    nm: "SSS"
};

console.log(human.id+" "+human.nm);

// type inference

function sub(n1: number, n2:number) {
    return n1 - n2;
};

let minus:number = sub(50,30);
console.log(minus);