class stCLS<T> {
    private elements: T[] = [];
    
    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}

let num1 = new stCLS<number>(5);

function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

while (!num1.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Push ${n} into the stack.`)
    num1.push(n);
}

while (!num1.isEmpty()) {
    let n = num1.pop();
    console.log(`Pop ${n} from the stack.`);
}


//** StCLS wth string */
let wordss = 'The rabbit wins the race'.split(' ');

let wordS = new stCLS<string>(wordss.length);

// push words into the stack
wordss.forEach(word => wordS.push(word));

// pop words from the stack
while (!wordS.isEmpty()) {
    console.log(wordS.pop());
}