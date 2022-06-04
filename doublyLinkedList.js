class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        // create a new node with the value passed to the function
        let newNode = new Node(val);

        // if the head is null, set the head and tail to be the new node
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;

        // if not, set the next property on the tail to be that node
        } else {
            this.tail.next = newNode;
            // set the previous property on the newly created node to be the tail
            newNode.prev = this.tail;
            // set the tail to be the newly created node
            this.tail = newNode;
        }

        // increment the length
        this.length++;

        // return the doubly linked list
        return this;
    }


    pop() {
        if (!this.head) return undefined;

        // tail value set to variable
        let poppedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // set actual list tail to the previous of the tail variable value
            this.tail = poppedNode.prev;

            // set the next of the list tail to be null, and the tail value is the previous of the original tail value
            this.tail.next = null;

            // set the previous of the original tail (popped one) to be null
            poppedNode.prev = null;
        }

        this.length--;
        return poppedNode;
    }

    shift() {
        if (this.length === 0) return undefined;

        // set the head value to a variable
        let oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        // set the head to the next of the head value in the variable
        this.head = oldHead.next;

        // set the previous of the head to null
        this.head.prev = null;

        // set the next of the old head to null
        oldHead.next = null;

        this.length--;
        return oldHead;
    }

    // console doesn't like this one but it works in the course video
    unshift(val) {
        let newNode = val;

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }
    
    get(idx) {
        if (idx < 0 || idx > this.length) return null;

        if (idx <= this.length/2) {
            let count = 0;
            let current = this.head;

            while (count != idx) {
                current = current.next;
                count++;
            }
            return current;

        } else {
            let count = this.length-1;
            let current = this.tail;

            while (count != idx) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }

    set(index, value) {
        let foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = value;
            return true;
        }

        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) {
            this.unshift(value);
        }
        if (index === this.length) {
            this.push(value);
        }

        let newNode = new Node(value);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;
        
        // create links with the new node
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length-1) return this.pop();

        // store value to be removed in a variable
        let removeThis = this.get(index);

        // update the node's next and prev properties to sever links from removed node
        let beforeNode = removeThis.prev;
        let afterNode = removeThis.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;

        // set the prev and next to null for the removed node
        removeThis.prev = null;
        removeThis.next = null;

        // decrement length
        this.length--;

        // return removed node
        return removeThis;

    }
}

let list = new DoublyLinkedList();
list.push('tesla');
list.push('will');
list.push('be');
list.push('my');
list.push('client');

console.log(list.remove(1));
console.log(list);