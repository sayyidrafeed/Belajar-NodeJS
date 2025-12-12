import util from 'util';

const name = 'John Doe';

console.log(util.format('Hello, %s!', name));
console.log(util.format('The value of pi is approximately %d.', Math.PI));
console.log(util.format('Object: %j', { name: 'Alice', age: 30 }));
console.log(util.format('Hexadecimal: %x', 255));
console.log(util.format('JSON: %j', { key: 'value' }));
console.log(util.format('Multiple values: %s is %d years old.', 'Bob', 25));

const obj = { name: 'Charlie', age: 28, city: 'New York' };
console.log(util.inspect(obj));
console.log(util.inspect(obj, { colors: true, depth: null }));

const arr = [1, 2, 3, 4, 5];
console.log(util.inspect(arr, { colors: true, depth: null }));

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person = new Person('David', 35);
console.log(util.inspect(person, { showHidden: true, depth: null }));

const circularObj = {};
circularObj.self = circularObj;
console.log(util.inspect(circularObj, { depth: null }));

// Demonstrating util.promisify
import fs from 'fs';

const readFileAsync = util.promisify(fs.readFile);

readFileAsync('Dasar/util.mjs', 'utf8')
    .then(data => {
        console.log('File content:', data.slice(0, 100) + '...'); // Print first 100 characters
    })
    .catch(err => {
        console.error('Error reading file:', err);
    });

// Demonstrating util.callbackify
const asyncFunction = async (a, b) => {
    return a + b;
};

const callbackifiedFunction = util.callbackify(asyncFunction);

callbackifiedFunction(5, 10, (err, result) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Result:', result); // Should print 15
    }
});

// Demonstrating util.deprecate
const oldFunction = () => {
    console.log('This is the old function.');
};

const deprecatedFunction = util.deprecate(oldFunction, 'oldFunction is deprecated. Use newFunction instead.');

deprecatedFunction();

const newFunction = () => {
    console.log('This is the new function.');
};

newFunction();