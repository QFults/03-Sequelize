const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Owner extends Model { }

Owner.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'owner' })

module.exports = Owner
