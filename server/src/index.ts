import express from "express";

const port = 3000;
const app = express()
const api = express.Router()

app.use(express.json())
app.use(express.raw())
app.use(express.urlencoded())

api.post("/add", async (req, res) => {
    if(!req.body.digitOne || !req.body.digitTwo)
    {
        return res.status(401).send({ error: "MISSING DIGIT ERROR" })
    }

    const result = Number(req.body.digitOne) + Number(req.body.digitTwo)

    res.status(200).send({ result: result })
})

api.post("/sub", async (req, res) => {
    if(!req.body.digitOne || !req.body.digitTwo)
    {
        return res.status(401).send({ error: "MISSING DIGIT ERROR" })
    }

    const result = Number(req.body.digitOne) - Number(req.body.digitTwo)

    res.status(200).send({ result: result })
})

api.post("/multiply", async (req, res) => {
    if(!req.body.digitOne || !req.body.digitTwo)
    {
        return res.status(401).send({ error: "MISSING DIGIT ERROR" })
    }

    const result = Number(req.body.digitOne) * Number(req.body.digitTwo)

    res.status(200).send({ result: result })
})

app.use("/api", api)

app.listen(port, () => {
    console.log("App started on:", port)
})