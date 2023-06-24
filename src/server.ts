import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, infoLogger } from './shared/logger'
import { Server } from 'http'

//uncaughe and undefind error handle
process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

let server: Server
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string) //as stirng na dile error ache
    infoLogger.info(`Database connection successfully`)

    server = app.listen(config.port, () => {
      infoLogger.info(`Application app listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('fail to connect database', error)
  }
  //unhandleRejection handle
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    }
    {
      process.exit(1)
    }
  })
}

//ei function ta pabo mongoose er quick start e

bootstrap()

// sigterm
process.on('SIGTERM', () => {
  infoLogger.info('Sigterm is received')
  if (server) {
    server.close()
  }
})
