import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import 'graphql-import-node'
import dummySchema from './schema.graphql'
import championsSchema from './champions.graphql'
import { resolvers } from '../resolvers/resolversMap'

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [
    dummySchema,
    championsSchema
  ],
  resolvers
})
