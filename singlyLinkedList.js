// piece of data = val
// reference to next node = next

class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop () {
        if (this.length === 0) {
            return undefined
        }

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift () {
        if (this.length === 0) {
            return undefined
        }

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }

    unshift (val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    get (index) {
        if (index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;

        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    set (val, index) {
        let foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = val;
            return true;
        }

        return false;
    }

    insert (index, val) {
        if (index < 0 || index > this.length) return false;

        if (index === this.length) {
            return !!this.push(val);
        }

        if (index === 0) {
            return !!this.unshift(val);
        }

        let insertedNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let beforeNodeNext = beforeNode.next;

        beforeNode = insertedNode;
        insertedNode.next = beforeNodeNext;

        this.length++;
        
        return true;
    }

    // my version but not sure for edge cases, I don't think it works
    remove (index) {
        if (index < 0 || index > this.length) return undefined;

        if (index === this.length - 1) {
            this.pop();
        }

        if (index === 0) {
            this.shift();
        }

        let prev = this.get(index - 1);
        let removed = this.get(index);
        prev.next = prev.next.next;

        this.length--;

        return removed;
    }

    // course version
    removeBetterVersion (index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }

    print () {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    reverse () {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next; // setting head node to the next one as next variable
            node.next = prev; // setting the next node after head to the previous variable
            prev = node; // setting the previous variable to the head node variable
            node = next; // setting the node variable to the value of next
        }

        return this;
        
    }

}

const list = new SinglyLinkedList();
list.push('Molly');
list.push('is');
list.push('a');
list.push('boss');
list.push('!');

list.reverse();
list.print();