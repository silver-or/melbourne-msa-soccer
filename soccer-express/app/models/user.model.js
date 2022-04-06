module.exports = mongoose => {
    const UserSchema = mongoose.model(
        'user',
        mongoose.Schema(
            {
                userId : String,
                pw : String,
                userName : String,
                tel : String
            }, {timestamps : true}
        )
    )
    return UserSchema
}