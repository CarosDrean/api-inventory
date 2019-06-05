import express from 'express'
import "@babel/polyfill"
import graphqlHTTP from 'express-graphql'
import cors from 'cors'
import schema from './schema'
import { connect } from './database'
import { PORT } from './config'
import auth from './middlewares/auth'

const app = express()
connect()

app.use(express.json())
app.use(cors({origin: ['https://lapizcero-secre.firebaseapp.com', 'http://localhost:4200']}))

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome!'
    })
})

app.use(auth.checkHeaders)

app.use('/graphql', graphqlHTTP((req) => ({
    schema: schema,
    context: {
        user: req.user,
        role: req.role
    }
})))

app.listen(PORT, () => {
    console.log('Server online!')
})