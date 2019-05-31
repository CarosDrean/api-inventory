import express from 'express';
import graphqlHTTP from 'express-graphql'
import schema from './schema';
import { connect } from './database'
import { PORT } from './config'

const app = express()
connect()

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome!'
    })
})

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}))

app.listen(PORT, () => {
    console.log('Server online!')
})