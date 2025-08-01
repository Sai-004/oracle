let fs = require("node:fs");
// console.log(fs.readFileSync("temp.txt").toString())
// console.log(fs.readFileSync("temp.txt")+"")
console.log(fs.readFileSync(process.argv[2],"utf-8"))