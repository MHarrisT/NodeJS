const express = require("express")
const {connectToMongoDB} = require("./connect")
const urlRoute = require("./routes/url")
const { handleGetAnalytics } = require('./controllers/url')
const URL = require('./models/url')
const app = express()
const PORT = 8001

connectToMongoDB('mongodb://localhost:27017/short-url').
then(() => console.log("MongoDB connected"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/url", urlRoute)

app.get('/analytics/:shortId', handleGetAnalytics)

app.get('/:shortId', async (req,res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    })

    if (!entry) return res.status(404).json({ error: "Short URL not found" })
    
    res.redirect(entry.redirectURL)
})

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`))