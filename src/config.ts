import 'dotenv/config'

export default {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '4000',
  apikey: process.env.API_KEY || null
}
