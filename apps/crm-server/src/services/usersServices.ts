import * as Dal from '../Dal/usersDal'

export const getAllUsers = async() => {
    try{
        const allUsers = await Dal.getAllUsers()
        return allUsers
    }catch(error){
        throw new Error(`Failed to fetch data: ${error}`)
    }
}

export const login = async(req) => {
    try{
        const user = await Dal.getUserById(req.input.email);
        if (req.input.password === user.dataValues.password){
            return user
        } else{
            throw new Error("Error: Incorrect password")
        }
    }catch(error){
        throw new Error(`Error: User not found ${error}`)
    }
}