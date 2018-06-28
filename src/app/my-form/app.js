var fs = require("fs");
var read_string = fs.readFileSync("src/app/mock-cars.ts",'utf-8');
console.log(read_string);
