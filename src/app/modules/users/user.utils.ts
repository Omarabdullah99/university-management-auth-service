import { User } from './user.model'
//last user Find
export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()

  return lastUser?.id
}

export const generateUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0') //last user thakele await findLastUserId()) or database e kono id na thakle first user er jonno id create e (0).toString().padStart(5, '0') first id hobe 00000

  //increment by 1
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementedId
}
