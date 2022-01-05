const pls = require('passport-local-sequelize')
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

// class User extends Model { }
// User.init({
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }, { sequelize, modelName: 'user' })

const User = pls.defineUser(sequelize, {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  campus: {
    type: DataTypes.STRING,
    allowNull: false
  },
  yardwork: {
    type: DataTypes.STRING,
    allowNull: true
  },
  furniture: {
    type: DataTypes.STRING,
    allowNull: true
  },
  moving: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cleaning: {
    type: DataTypes.STRING,
    allowNull: true
  },
  delivery: {
    type: DataTypes.STRING,
    allowNull: true
  },
  shopping: {
    type: DataTypes.STRING,
    allowNull: true
  },
  errands: {
    type: DataTypes.STRING,
    allowNull: true
  }
})


module.exports = User
