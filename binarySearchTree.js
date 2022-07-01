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
                // if (value === current.value) return undefined;
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
                    } else {
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

    BFS () {
        let node = this.root;
        let data = [];
        let queue = [];

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }

    DFSPreOrder () {
        let data = [];
        let current = this.root;

        const traverse = (node) => {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    DFSPostOrder () {
        let data = [];

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    DFSInOrder () {
        let data = [];
        let current = this.root;

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }
}


let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.DFSInOrder());