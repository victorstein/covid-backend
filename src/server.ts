import 'reflect-metadata'
import config from './config'
import expressLoader from './loaders/expressLoader'
import apolloLoader from './loaders/apolloLoader'

(async () => {
  try {
    // Get the app from the express loader
    const app = expressLoader()    

    // Create the server using the apollo loader
    await apolloLoader(app)

    // Start listening
    app.listen(config.port, () => console.log(`Server running in port ${config.port}`))
  } catch (e) {
    console.log(e)
  }
})()