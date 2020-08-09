import 'dotenv/config'

const config = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '4000',
  apikey: process.env.API_KEY || null,
  allowedOrigins: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS?.split(',') : '*'
}

export default config