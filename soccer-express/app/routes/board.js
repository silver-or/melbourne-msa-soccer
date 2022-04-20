import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import BoardService from "../services/boardService.js"

const corsOptions = {
    origin : process.env.ORIGIN,
    optionsSuccessStatus : 200
}

const app = express()
app.use(cors())

app.post('/write', cors(corsOptions), (req, res) => {
    const service = new BoardService()
    res.status(200).json(service.write(req, res))
})

export default app