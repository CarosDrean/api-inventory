const permission = {}
import User from '../models/user'

permission.isAuthenticated = (user) => {
    if(!user) throw new Error('No autenticado')
}

permission.isAdmin = (user, role) => {
    permission.isAuthenticated(user)
    if(role !== 'Admin') throw new Error('No es administrador.')
}

permission.isUser = (user, role) => {
    permission.isAuthenticated(user)
    console.log('per: ' + role)
    if(role !== 'User') throw new Error('No es usuario.')
}

permission.getRoleUser = async (_id) => {
    const {role} = await User.findOne({ _id }, {role: 1})
    return role
}

export default permission