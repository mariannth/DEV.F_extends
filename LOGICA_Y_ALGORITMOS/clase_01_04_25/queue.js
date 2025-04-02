class Queue{
    constructor() {
        this.queue = [];
    }

    enqueue(data) {
        this.queue = [...this.queue, data];
    }

    dequeue(){
        let frontElement = this.queue[this.queue.length - 1];
        let newQueue = [];
        for (let i = 1; i < this.queue.length -1; i++) {
            newQueue = [...newQueue, this.queue[i]];
        }
        this.queue = newQueue;
        return frontElement;
    }

    front(){
        return this.queue[this.queue.length - 1];
    }

    isEmpty(){
        return this.queue.length === 0;
    }
}

const myQueue = new Queue();
myQueue.enqueue(6);
myQueue.enqueue(2);
myQueue.enqueue(5);

console.log(myQueue.front());
console.log(myQueue.dequeue());
console.log(myQueue.isEmpty());

console.log(myQueue);