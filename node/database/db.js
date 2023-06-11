import {Sequelize} from 'sequelize'

const db = new Sequelize('pasantia', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

export default db