import fs from "fs";

const writer = fs.createWriteStream("output.log");

writer.write("Hello World\n");
writer.write("Hello World\n");
writer.write("Hello World\n");
writer.end();

const reader = fs.createReadStream("output.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
});