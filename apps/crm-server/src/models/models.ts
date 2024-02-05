import {DataTypes} from 'sequelize'
import {sequelize} from '../configs/connectDB'


export const User = sequelize.define('user',{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    full_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    is_admin:{
        type: DataTypes.BOOLEAN,
        defaultValue:false
    }
},{
    timestamps: false
})