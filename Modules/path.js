const path = require("path");

console.log(path.sep);

const filePth = path.join("content", "subfolder", "test.txt");

console.log(filePth, path);

const abs = path.resolve(__dirname, "content", "subfolder", "test.txt");

console.log(abs);
