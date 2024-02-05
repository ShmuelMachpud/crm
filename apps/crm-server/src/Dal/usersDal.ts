import {User} from '../models/models'

export const getAllUsers = async() => {
    const allUsers = User.findAll()
    return allUsers
}

export const getUserById = async(email) => {
    const user = await User.findByPk(email)
    return user
}