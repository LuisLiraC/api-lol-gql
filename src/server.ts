import express from 'express'
import compression from 'compression'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './schema'
import { ChampionsAPI } from './data/data-champions'
const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(compression())
app.use(express.json())

const server = new ApolloServer({
  schema,
  introspection: true,
  dataSources: () => ({
    champions: new ChampionsAPI()
  })
})

server.applyMiddleware({ app })

app.listen(PORT, () => {
  console.log(`Server lister on http://localhost:${PORT}/graphql`)
})