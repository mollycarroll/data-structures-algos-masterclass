// add the new element to the end of the array
// compare element with parent -- 
// element variable, element's index variable, parent index variable
// if the element is larger than parent, swap them

class MaxBinaryHeap {
    constructor () {
        this.values = [41,39,33,18,27,12];
    }

    insert (element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp () {
        const element = this.values[this.values.length-1]; // 55
        let elementIdx = this.values.length-1; // 6
        let parentIdx = Math.floor((elementIdx-1)/2) // 33
        console.log(elementIdx, parentIdx);

        while (element > this.values[parentIdx]) {
            
            [this.values[elementIdx], this.values[parentIdx]] = [this.values[parentIdx], this.values[elementIdx]];

            elementIdx = parentIdx;
        }
        console.log(elementIdx, parentIdx);
        console.log(this.values);
    }
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(55));