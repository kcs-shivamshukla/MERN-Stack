interface KeyValuePair<K, V> {
    key: K;
    value: V;
}
let stud1: KeyValuePair<string, number> = {
    key: 'Roll No',
    value: 1
};

let stud2: KeyValuePair<number, boolean> = {
    key:1,
    value: true
};

console.log(stud1);
console.log(stud2);