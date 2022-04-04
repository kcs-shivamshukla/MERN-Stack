var stCLS = /** @class */ (function () {
    function stCLS(size) {
        this.size = size;
        this.elements = [];
    }
    stCLS.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    stCLS.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    stCLS.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    };
    stCLS.prototype.pop = function () {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    };
    return stCLS;
}());
var num1 = new stCLS(5);
function randBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
while (!num1.isFull()) {
    var n = randBetween(1, 10);
    console.log("Push ".concat(n, " into the stack."));
    num1.push(n);
}
while (!num1.isEmpty()) {
    var n = num1.pop();
    console.log("Pop ".concat(n, " from the stack."));
}
//** StCLS wth string */
var wordss = 'The quick brown fox jumps over the lazy dog'.split(' ');
var wordS = new stCLS(wordss.length);
// push words into the stack
wordss.forEach(function (word) { return wordS.push(word); });
// pop words from the stack
while (!wordS.isEmpty()) {
    console.log(wordS.pop());
}
