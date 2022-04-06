const {signup} = require('../controllers/user.controller')
module.exports = x => x.app.post(`${x.url}/sign-up`, signup) // x는 payload (데이터를 가지고 있는 파라미터)