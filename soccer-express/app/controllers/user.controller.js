const db = require('../models/index')

const UserSchema = db.user
exports.signup = (req, res) => {
    console.log('진행 4 : 노드 서버에 진입' + JSON.stringify(req.body))
    console.log(req.body)
    new UserSchema(req.body).save(() => {
        res.status(200).json({'result':'ok'})
    })
}

exports.userlist = (req, res) => {
    console.log(`userController access!`)
    UserSchema.find()
    .exec((err, users) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({success:true, users})
    })
}

exports.profile = (req, res) => { // 마이페이지
    console.log(`user profile access!`)
    UserSchema.find({userid: req.params.id})
    .exec((err, user) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, user })
    })  
}

exports.login = (req, res) => {
    console.log(`login access!`)
    UserSchema.find({userid: req.params.id, password: req.params.password})
    .exec((err, user) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, user })
    })
    try {
        const id = 'test'
        const nick = 'test'
        // jwt.sign() 메소드: 토큰 발급 
        const token = jwt.sign({
        id, 
        nick, 
        }, process.env.JWT_SECRET, {
        expiresIn: '1m', //1분
        issuer: '토큰 발급자'
        });
        
        return res.json({
        code: 200,
        message: '토큰이 발급되었습니다.',
        token,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: '서버 에러',
        });
    }
}