var fs = require('fs');

const test1 = require("./feelings-2021.json");
const test2 = require("./feelings-2021-2.json");
const test3 = require("./feelings-2021-3.json");
const test4 = require("./feelings-2021-4.json");
const test5 = require("./feelings-2021-5.json");
const test6 = require("./feelings-2021-6.json");
const test7 = require("./feelings-2021-7.json");
const test8 = require("./feelings-2021-8.json");



const json = [test1, test2, test3, test4, test5, test6, test7, test8].flatMap((num) => num);

fs.writeFileSync('./feelings-2021.json', JSON.stringify(json))

console.log(json.length);