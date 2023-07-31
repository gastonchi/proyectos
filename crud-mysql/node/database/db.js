import { Sequelize } from 'sequelize'

const db = new Sequelize('crud-mysql','root','1234',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db