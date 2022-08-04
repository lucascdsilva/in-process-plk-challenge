const EventEmitter = require('events').EventEmitter;

class ProcessorQueue extends EventEmitter {
    static self = null;

    static EVENT_ADDED = 'eventAdded';
    static EVENT_REMOVED = 'eventRemoved';

    constructor() {
        super();
        this.queue = [];
    }

    add(event) {
        console.log('event added:', event);
        this.queue.push(event);
        this.emit(ProcessorQueue.EVENT_ADDED, event);

        return this;
    }

    remove(event) {
        const index = this.queue.indexOf(event);
        if (index >= 0) {
            this.queue.splice(index, 1);
            this.emit(ProcessorQueue.EVENT_REMOVED, event);
        }
    }

    static create() {
        if (ProcessorQueue.self == null) {
            ProcessorQueue.self = new ProcessorQueue();
        }

        return ProcessorQueue.self;
    }
}

module.exports = ProcessorQueue;