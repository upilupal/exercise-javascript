// Create a code that could handle a queue on food ordering process, with this specification:
// ● Create a class to handle queuing process in a file.
// ● Create file to handle and execute queue class.
// ● Each queue process takes a random interval from 1-10 seconds.
// ● Clue : Use while & promise
// OUTPUT ==>>
// ● Add orders to queue
// ● [Log] Print all data in queue
// ● Run process -> process queue based on random interval
// ● [Log] Queue 1 Done in XXX minutes
// ● [Log] Queue 2 Done in XXX minutes
// ● [Log] Queue 3 Done in XXX minutes
// ● [Log] Queue 4 Done in XXX minutes

class QueueHandler {
    constructor() {
      this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
        return (item) + ' telah dimasukkan'
    }
  
    
  }
  
  const order = new QueueHandler();
  console.log(order.enqueue("bakso"));
  