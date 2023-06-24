import express, { Application } from 'express'
// import userService from './app/modules/users/user.service'

import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { userRoutes } from './app/modules/users/user.route'
const app: Application = express()

//cors use
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users', userRoutes)

// tesing
app.get('/', () => {
  throw new Error('Testing Error logger')
})

//global error Handler
app.use(globalErrorHandler)

export default app
