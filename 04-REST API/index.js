const express = require("express")
const users = require("./MOCK_DATA")
const fs = require("fs")

const app = express()
const PORT = 8000

// MiddleWare - Plugin
app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
    fs.appendFile('log.txt', `${Date.now()}: ${req.method}: ${req.path}`, (err,data) => {
        next()
    })
})

// app.use((req, res, next) => {
//     console.log('Hello from middleware 2 ', req.myUserName)
//      //return res.json({msg: 'Hello from middleware 1'})
//     next()
// })

// app.get('/api/users', (req,res) => {
//     const html = `
//     <ul>
//         ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `
//     return res.send(html)
// })

app.route('/api/users/:id').get((req,res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    res.json(user)
})
.put((req,res)=> {
    return res.json({status: "pending"})
})
.delete((req,res) => {
    return res.json({status: "pending"})
})

app.post('/api/users', (req, res) => {
    const body = req.body
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.ip_address){
        return res.status(400).json({msg: "All fields are required..."})
    }
    users.push({...body, id: users.length+1})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({status: "pending"})
    })
})

app.get("/api/users", (req, res) => {
    return res.json(users)
})

app.listen(PORT, () => console.log('Server started at PORT ' + PORT))