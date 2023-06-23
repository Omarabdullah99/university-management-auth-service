import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, infoLogger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string) //as stirng na dile error ache
    infoLogger.info(`Database connection successfully`)
    app.listen(config.port, () => {
      infoLogger.info(`Application app listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('fail to connect database', error)
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//ei function ta pabo mongoose er quick start e

bootstrap()
