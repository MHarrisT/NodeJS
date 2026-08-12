const mathFunc = require("./math") // to import functions
const {add, sub} = require("./math") // destructuring

console.log(mathFunc.add(2,5))
console.log(mathFunc.sub(2,5))

console.log("====Using Destructuring====")
console.log(add(6,7))
console.log(sub(6,7))