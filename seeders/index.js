require('dotenv').config()

const { User, Post, Comment } = require('../models')
const sequelize = require('../db')

async function seeder() {
  await sequelize.sync({ force: true })

  console.log('----Seeding Data----')

  try {
    await User.register(new User({ username: 'johndoe', email: 'johndoe@gmail.com', firstname: 'John',lastname: 'Doe' }), 'password1234')
    await User.register(new User({ username: 'janedoe', email: 'janedoe@gmail.com', firstname: 'Jane',lastname: 'Doe'}), 'password4321')
    await User.register(new User({ username: 'jackdoe', email: 'jackdoe@gmail.com', firstname: 'Jack',lastname: 'Doe'}), 'rootroot')
    // await Post.bulkCreate(require('./postSeed.js'))
  } catch (err) {
    console.log(err)
  }


  console.log('----Data Seeded----')

  process.exit()
}

seeder()
