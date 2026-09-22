const fs = require('fs');
console.log('1: Start (sync)');
setTimeout(() => {
    console.log('2: Inside setTimeout (macrotask)');
}, 0);
Promise.resolve().then(() => {
    console.log('3: Inside Promise.then (microtask - runs BEFORE setTimeout)');
});
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file:', err);
        return;
    }
    console.log('4: Inside fs.readFile callback (I/O callback)');
});
console.log('5: End (sync)');
console.log("1: Start (sync)");
setTimeout(() => {
    console.log("2: setTimeout (macroTask - timers phase)");
}, 0);
setImmediate(() => {
    console.log("3: setImmediate (macroTask - check phase)");
});
process.nextTick(() => {
    console.log("4: process.nextTick (highest priority microtask)");
});
Promise.resolve().then(() => {
    console.log("5: Promise.then (microtask)");
});
