import { buildSchema } from "type-graphql"
import { Application } from "express"
import config from "../config"
import resolvers from '../resolvers'
import { ApolloServer, CorsOptions } from "apollo-server-express"

// Set the cors options
const cors: CorsOptions = {
  credentials: true,
  origin: config.environment === 'production' ? config.allowedOrigins : '*'
}

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
      formatError: (err) => {
        const message = err.message.toLowerCase()
        if (message.includes('argument validation error')) {
          const error = err.extensions!.exception.validationErrors.map((u: any) => u.constraints)
          err.message = error.flatMap((u : any) => Object.values(u))
          err.extensions!.code = 'BAD_REQUEST'
        }
        return err
      }
    })

    // Apply the express app to the apollo server
    server.applyMiddleware({ app, cors })
  } catch (e) {
    console.log(e)
    throw new Error(e)
  }
}