const {signup, userlist, login} = require('../controllers/user.controller')
const { verifyToken } = require('./middlewares');

module.exports = x => {
    console.log(`user.route 로 들어옴`)
    x.app.post(`${x.url}/sign-up`, signup) // x는 payload (데이터를 가지고 있는 파라미터)
    x.app.post(`${x.url}/login`, verifyToken, login) // 로그인은 보안 때문에 post
    x.app.get(`${x.url}/list`, userlist)
}