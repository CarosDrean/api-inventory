import jwt from 'jsonwebtoken'
import User from '../models/user'
import { SECRET_TOKEN } from '../config'
import permission from '../middlewares/permissions'

const auth = {}

let role
let userTemp
function getRole(user) {
  console.log('role: ' + role)
  if (userTemp !== undefined) {
    if(userTemp !== user) role = undefined
  }
  if (user) {
    if (role === undefined) {
      userTemp = user
      permission.getRoleUser(user).then((rol) => {
        console.log('Actualizando role: ' + rol)
        role = rol
      })
    }
  } 
  return role
}

auth.checkHeaders = async (req, res, next) => {
  const token = req.headers["x-token"]
  if (token) {
    try {
      console.log('intentando...')
      const {
        user
      } = jwt.verify(token, SECRET_TOKEN)
      // const {role} = await User.findOne({ _id: user }, {role: 1})
      req.role = getRole(user)
      req.user = user
    } catch (e) {
      //INVALID token
      console.log('nuevamente intentando...')
      const newToken = await auth.checkToken(token)
      // const {role} = await User.findOne({ _id: newToken.user }, {role: 1})
      req.role = role
      req.user = getRole(newToken.user)
      if (newToken.token) {
        res.set("Access-Control-Expose-Headers", "x-token")
        res.set("x-token", newToken.token)
      }
    }
  }
  next()
}

auth.checkToken = async (token) => {
  let idUser = null
  try {
    const {
      user
    } = await jwt.decode(token)
    idUser = user;
  } catch (e) {
    return {}
  }
  const user = await User.findOne({
    _id: idUser
  })
  const newToken = auth.getToken(user)
  return {
    user: user._id,
    token: newToken
  }
}

auth.getToken = ({
  _id
}) => {
  const token = jwt.sign({
    user: _id
  }, SECRET_TOKEN, {
    expiresIn: '5d'
  })
  return token
}

auth.login = async (email, password) => {
  const user = await User.findOne({
    'user': email
  })
  if (!user) {
    return {
      success: false,
      errors: [{
        path: 'email',
        message: 'Email no existe'
      }]
    }
  }
  if (password !== user.password) {
    return {
      success: false,
      errors: [{
        path: 'password',
        message: 'Password inválido'
      }]
    }
  }

  const token = auth.getToken(user)

  return {
    success: true,
    token,
    errors: []
  }
}

export default auth