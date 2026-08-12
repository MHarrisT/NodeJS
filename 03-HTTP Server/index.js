const http = require('http')
const fs = require("fs")
const url = require("url")
const express = require("express")

// express makes code cleaner
const app = express()

app.get('/', (req,res) => {
    return res.send("Hello from Home Page")   
})

app.get('/about', (req,res) => {
    return res.send("Hello from about page" + "hello " + req.query.name)
})

// app.listen(8000, () => {
//     console.log("Server started!")
// })

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url}: ${req.method} New Req Received\n`
     // Parse the URL. The "true" argument converts the query string into a JavaScript object
    const myUrl = url.parse(req.url, true) 
    console.log(myUrl)
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case '/': 
                // Check if 'myname' exists in the query parameters
                if (myUrl.query.myname) {
                    res.end(`HomePage. Hello ${myUrl.query.myname}!`);
                } else {
                    res.end("HomePage");
                }
                break;
            
            case '/about': 
                // Grabbing a query parameter for the about page
                const qp = myUrl.query.myname || 'Guest';
                res.end(`Hello ${qp}, this is the about page.`);
                break;
            
            case '/signup':
                if (req.method === 'GET') res.end('This is a signup form')
                else if (req.method === 'POST'){
                    res.end("Success")
                }
            default: 
                res.end("404 not found");
        }
    })
})

const myServer1 = http.createServer(app)


myServer1.listen(8000, () => {
    console.log("Server started!")
})
// data get = get data
// data post = send data