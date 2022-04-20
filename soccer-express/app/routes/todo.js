import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import TodoService from "../services/todoService.js"

const corsOptions = {
    origin : process.env.ORIGIN,
    optionsSuccessStatus : 200
}

const app = express()
app.use(cors())

app.post('/add', cors(corsOptions), (req, res) => {
    const service = new TodoService()
    res.status(200).json(service.addTodo(req, res))
})

app.post('/get', cors(corsOptions), (req, res) => {
    const service = new TodoService()
    res.status(200).json(service.getTodo(req, res))
})

export default app