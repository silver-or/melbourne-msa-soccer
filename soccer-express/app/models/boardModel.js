export default function BoardModel(mongoose){
    mongoose.model('todo',
        mongoose.Schema(
            {
                passengerId : String,
                name : String,
                teamId : String,
                subject : String
            }, {timestamps : true}
        )
    )
}