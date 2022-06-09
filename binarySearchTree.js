class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor () {
        this.root = null;
    }

    insert (value) {
        let newNode = new Node(value);

        // if no root, the new node is the root
        if (this.root === null) {
            this.root = newNode;
            return this;

        } else {
            // track the root
            let current = this.root;

            // while 
            while (true) {
                if (value === current.value) return undefined;
                // if the inserted value is less than the current tracked value
                if (value < current.value) {
                    // if the left/lesser value is null, insert the new node there
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        // set the tracked node to the left/lesser value node
                        current = current.left;
                    }
                    // if the inserted value is greater than the current tracked value
                } else if (value > current.value) {
                    // if the right/greater node value is null
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                        // tracked value is the right/greater than the current tracked value
                        current = current.right;
                    }
                }
            }
        }
    }

    find (value) {
        if (this.root === null) return false;

        let current = this.root;
        let found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }   
}


let tree = new BinarySearchTree();
tree.insert(12);
tree.insert(1);
tree.insert(4);

console.log(tree);