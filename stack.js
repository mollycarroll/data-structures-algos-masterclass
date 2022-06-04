class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(value);

        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let firstNode = this.first;
            this.first = newNode;
            newNode.next = firstNode;
        }

        this.size++;
        return this;
    }

    pop() {
        if (this.size === 0) return null;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        }

        let removed = this.first;
        this.first = removed.next;
        this.size--;

        return removed.value;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());