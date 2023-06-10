import express, { Application, Request, Response } from 'express'
// import userService from './app/modules/users/user.service'
import userRouter from './app/modules/users/user.route'
import cors from 'cors'
const app: Application = express()

//cors use
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users', userRouter)

app.get('/', async (req: Request, res: Response) => {
  // await userService.createUser({
  //   id:"999",
  //   password:"hfkl",
  //   role:"student"
  // })

  res.send('Working successfully')
})

export default app
