// You have implemented the BankQueue class to manage customer queues in a bank. In this scenario, 
//     you can perform operations such as adding customers to the queue, calling the next customer, and 
//     counting the number of customers in the queue.

//    constructor:
//    - this.queue

//    method : 
//    - enqueue : menambahkan value baru dalam antrian
//    - dequeue : menghilangkan value paling depan dalam antrian
//    - size : melihat jumlah antrian saat ini

class Queue {
    #queue;
    constructor() {
        this.#queue = [];
    }

    enqueue(element) {
        // masukin data
        return this.#queue.push(element);
    }

    dequeue() {
        //menghilangkan data urutan paling awal
        return this.#queue.shift();
    }      
    
    
    
    getAllElements() {
        return this.#queue;
    }

    // size() {
    //     return this.#queue.getAllElements()
    // }
}

const queueBank = new Queue();

console.log(queueBank.enqueue(1));
console.log(queueBank.enqueue(2));
console.log(queueBank.enqueue(3));
console.log(queueBank.enqueue(4));
console.log(queueBank.enqueue(5));

const size = queueBank.getAllElements();
console.log(size)

console.log(queueBank.dequeue(1));
console.log(queueBank.dequeue(2));

console.log(queueBank.getAllElements());