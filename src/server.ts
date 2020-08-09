import 'reflect-metadata'
import config from './config'
import expressLoader from './loaders/expressLoader'
import apolloLoader from './loaders/apolloLoader'
import notFound from './middlewares/notFound'

(async () => {
  try {
    // Get the app from the express loader
    const app = expressLoader()    

    // Create the server using the apollo loader
    await apolloLoader(app)

    // Start listening
    app.listen(config.port, () => {
      console.log(`Server running in at http://localhost:${config.port}/graphql`)
    })
    
    // Handle 404
    app.use(notFound)
  } catch (e) {
    console.log(e)
  }
})()