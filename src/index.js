import express from 'express';
import graphqlHTTP from 'express-graphql'
import schema from './schema';
import { connect } from './database'
import { PORT } from './config'
import auth from './middlewares/auth';

const app = express()
connect()

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome!'
    })
})

app.use(auth.checkHeaders)

app.use('/graphql', graphqlHTTP((req) => ({
    graphiql: true,
    schema: schema,
    context: {
        user: req.user
    }
})))

app.listen(PORT, () => {
    console.log('Server online!')
})