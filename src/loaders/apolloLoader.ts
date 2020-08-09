import { buildSchema } from "type-graphql"
import { Application } from "express"
import config from "../config"
import resolvers from '../resolvers'
import { ApolloServer } from "apollo-server-express"

export default async (app: Application) => {
  try {
    // Create Schema
    const schema = await buildSchema({
      resolvers
    })

    // Create the server
    const server = new ApolloServer({
      context: ({ req, res }) => {
        return { req, res }
      },
      playground: config.environment !== 'production',
      schema,
      debug: config.environment !== 'production',
    })

    // Apply the express app to the apollo server
    server.applyMiddleware({ app })
  } catch (e) {
    console.log(e)
    throw new Error(e)
  }
}