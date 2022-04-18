const {addtodo, todolist} = require('../controllers/todo.controller')
module.exports = x => {
    console.log(`todo.route 로 들어옴`)
    x.app.post(`${x.url}/todo`, addtodo)
    x.app.get(`${x.url}/list`, todolist)
}