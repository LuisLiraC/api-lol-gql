import { IResolvers } from 'graphql-tools'
import { championsQueries } from './champions/championsQueries'
import { championsMutations } from './champions/championsMutations'

export const resolvers: IResolvers = {
  Query: {
    ...championsQueries
  },
  Mutation: {
    ...championsMutations
  }
}