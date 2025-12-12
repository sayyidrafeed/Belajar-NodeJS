import process from 'process';
import readLine from 'readline';

const input = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Masukkan nama anda: ", (nama) => {
    console.log(`Hallo ${nama}`);
    input.close();
});