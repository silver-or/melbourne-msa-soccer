const {todo, todolist} = require('../controllers/todo.controller')
module.exports = x => 
module.exports = x => {
    x.app.get(`${x.url}/todo`, todo)
    x.app.get(`${x.url}/list`, todolist)
}