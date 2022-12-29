/*
Implement the following on the SinglyLinkedList class:

push

This function should take in a value and add a node to the end of the SinglyLinkedList. It should return the SinglyLinkedList.
*/

class Node {

    constructor(val) {
        this.val = val;
        this.next = null;
    }

}

class SinglyLinkedList {
    
    constructor(val) {
        this.head = val;
        this.next = null;
        this.length = 0;
    }

    push(val) {
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

    pop() {
        if (this.length < 1) {
            return undefined;
        }

        

    }

}

let singlyLinkedList = new SinglyLinkedList();


console.log(singlyLinkedList);