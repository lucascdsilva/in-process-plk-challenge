var http = require('http');
const ProcessorListener = require('./src/processor.listener');
const ProcessorQueue = require('./src/processor.queue');

const queue = ProcessorQueue.create();
const listener = new ProcessorListener();
listener.listen(queue);


http.createServer(function (req, res) {
    res.writeHead(202, {
        'Content-Type': 'text/plain'
    });

    queue.add({
        message: `Hi, it now is ${Date.now()}-${Math.floor(Math.random() * 1000)}  !`,
        processed: false
    });

    res.write('OK');
    res.end();
}).listen(8001);