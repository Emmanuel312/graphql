const User = require('./User')

module.exports =
{
    Query:
    {
        users: () => User.find(),
        user: (_,{ id }) => User.findById(id)
    },
    Mutation:
    {
        createUser: (_, { name,email }) => User.create({ name, email }),
        deleteUser: (_,{ id }) => User.findByIdAndDelete(id),
        updateUser: (_,{ id,name,email }) => User.findByIdAndUpdate(id,{name,email})
    }

}