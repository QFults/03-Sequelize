const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.JAWSDB_URL || 'mysql://root:rootroot@localhost/pets_db')

module.exports = sequelize
