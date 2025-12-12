import {Console} from 'console';
import fs from 'fs';

const logFile = fs.createWriteStream('app.log');

const logger = new Console({
    stdout: logFile,
    stderr: logFile
    });

logger.log('This is a log message');
logger.error('This is an error message');

const obj = {
    name: 'Alice',
    age: 30,
    city: 'Wonderland'
    };

logger.table(obj);

console.log('Log messages have been written to app.log');