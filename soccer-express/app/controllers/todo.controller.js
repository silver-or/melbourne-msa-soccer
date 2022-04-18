const db = require('../models/index')
const TodoSchema = db.todo

exports.addtodo = (req, res) => {
    console.log('진행 4 : 노드 서버에 진입' + JSON.stringify(req.body))
    new TodoSchema(req.body).save(() => {
        res.status(200).json({'result':'ok'})
    })
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
}

exports.todolist = (req, res) => {
    console.log(`todoController access!`)
    TodoSchema.find()
    .exec((err, todos) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({success:true, todos})
        console.log(todos)
    })
}