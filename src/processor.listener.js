const ProcessorQueue = require("./processor.queue");

class ProcessorListener {

    listen(queue) {
        queue.on(ProcessorQueue.EVENT_ADDED, (event) => {
            setTimeout(() => {
                this.process(event);
                queue.remove(event);
            }, 5000);
        })
    }

    process(event) {
        event.processed = true;
        console.log('event processed:', event);
    }
}

module.exports = ProcessorListener;