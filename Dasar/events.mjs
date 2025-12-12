import {EventEmitter} from 'events';

const emitter = new EventEmitter();
emitter.on("Hello", (name) => {
    console.log(`Hello, ${name}`);
})

emitter.emit("Hello", "John Doe");
emitter.emit("Hello", "Jane Doe");
emitter.emit("Hello", "Jack Doe");
emitter.emit("Hello", "Jill Doe");
emitter.emit("Hello", "Joe Doe");
emitter.emit("Hello", "Jim Doe");
emitter.emit("Hello", "Jerry Doe");
emitter.emit("Hello", "Jessica Doe");
emitter.emit("Hello", "Jasmine Doe");
emitter.emit("Hello", "Javier Doe");
emitter.emit("Hello" );