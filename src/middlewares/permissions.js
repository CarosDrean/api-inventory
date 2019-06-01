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
    console.log(role)
    if(role !== 'User') throw new Error('No es usuario.')
}

permission.getRoleUser = async (_id) => {
    const user = await User.findById(_id)
    return user.role // esto esta retornando una promesa solucionarlo
}

export default permission