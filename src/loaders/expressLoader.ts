import express, { json, Application } from 'express'
import config from '../config'
import helmet from 'helmet'
import enforce from 'express-sslify'

export default (): Application => {
  try {
    // initialize the express server
    const app = express()

    // Basic security for production
    if (config.environment === 'production') {
      app.use(helmet())
      app.use(json({ limit: '200kb' }))
      app.disable('x-powered-by')
      app.use(enforce.HTTPS({ trustProtoHeader: true }))
    }

    return app
  } catch (e) {
    console.log(e)
    throw new Error(e)
  }
}