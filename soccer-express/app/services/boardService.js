import db from "../models/index.js"

export default function BoardService(){
    const Board = db.Board
    return {
        write(req, _res){
            console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
            new Board(req.body).save(() => {
                return 'ok'
            })
        }
    }
}