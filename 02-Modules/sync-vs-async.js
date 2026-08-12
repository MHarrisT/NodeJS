const fs = require("fs")
console.log("1")

//sync: blocking => process thread is blocked
const result = fs.readFileSync("./NodeJS/02-Modules/data.txt", "utf-8")
console.log(result)

console.log(2)

console.log(3)
// async: non blocking => process thread is not blocked
fs.readFile("./NodeJS/02-Modules/data.txt", "utf-8", (err, result) => {
    if (err) console.log(err)
    else console.log(result)
})

console.log(4)