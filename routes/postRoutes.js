const router = require('express').Router()
const { Post, User } = require('../models')
const passport = require('passport')

// GET all posts
router.get('/posts', passport.authenticate('jwt'), async function (req, res) {
  const posts = await Post.findAll({ include: [User] })
  res.json(posts)
})

// POST one post
router.post('/posts', passport.authenticate('jwt'), async function (req, res) {
  const post = await Post.create({
    body: req.body.body,
    title: req.body.title,
    uid: req.user.id
  })
  res.json(post)
})

// DELETE one post
router.delete('/posts/:id',passport.authenticate('jwt'), async function ({ params: { id } }, res) {
  await Post.destroy({ where: { id } })
  res.sendStatus(200)
})

module.exports = router
