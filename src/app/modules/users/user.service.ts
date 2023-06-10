import config from '../../../config'
import { User } from './user.model'
import { generateUserId } from './user.utils'
import { IUser } from './users.interface'

//createUser
const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated incremental id
  const id = await generateUserId()
  user.id = id

  //default password
  if (!user.password) {
    user.password = config.default_user_pass as string //note config er import jate eita hoy ta sure hoya lagbe import config from "../../../config"
  }
  const createdUser = User.create(user)
  if (!createdUser) {
    throw new Error('Failed to create user!')
  }

  return createdUser
}

export default {
  createUser,
}
