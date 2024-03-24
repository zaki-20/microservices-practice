const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const { randomBytes } = require("crypto")

const app = express()
app.use(bodyParser.json())
app.use(cors())

const commentByPostId = {}

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentByPostId[req.params.id] || [])
})

app.post('/posts/:id/comments', (req, res) => {
    const commentsId = randomBytes(4).toString('hex')
    const { content } = req.body
    const comments = commentByPostId[req.params.id] || []
    comments.push({ id: commentsId, content })
    commentByPostId[req.params.id] = comments 
    res.status(201).send(comments)
})

app.listen(4001, () => {
    console.log("listening on 4001")
})