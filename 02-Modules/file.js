const fs = require("fs")

// synchronous call to create a file and write data
// fs.writeFileSync("./NodeJS/02-Modules/test.txt", "this is test")

// //asynchromous call
// fs.writeFile("./NodeJS/02-Modules/test.txt", "this is test async", (err) => {})

//reading files
// sync returns the result
const result = fs.readFileSync("./NodeJS/02-Modules/data.txt", "utf-8")
//console.log(result)

// async expects a callback function, not a return
// fs.readFile("./NodeJS/02-Modules/data.txt", "utf-8", (err, result) => {
//     if (err) console.log(err)
//     else console.log(result)
// })

fs.appendFileSync("./NodeJS/02-Modules/test.txt", "hello")
fs.cpSync("./NodeJS/02-Modules/test.txt", "./NodeJS/02-Modules/test_copy.txt")
fs.unlinkSync("./NodeJS/02-Modules/test_copy.txt")
console.log(fs.statSync("./NodeJS/02-Modules/test.txt").isFile())
// fs.mkdirSync("my-docs/a/b", {recursive: true}) // creates folders