import {Sequelize} from 'sequelize'

const sequelize = new Sequelize('postgres://wwwmxpfp:J53gt7BtwVWOXjhWdpZbcQtL7LNbhybj@mel.db.elephantsql.com/wwwmxpfp')

export const connectDB = async() => {
    try{
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch(error){
        console.error('Unable to connect to the database:', error)
    }
}
