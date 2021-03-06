const config = require('config-lite')
const User = require('../proxy').User
const UserModel = require('../models').User

exports.userRequired = function (req, res, next) {
  if (!req.session || !req.session.user || !req.session.user._id) {
    return res.status(403).send('forbidden!')
  }
  next()
}

exports.gen_session = function (user, res) {
  const authToken = user.userid
  const opts = {
    path: '/',
    maxAge: 1000 * 60 * 60 * 24 * 30,
    signed: true,
    httpOnly: true
  }
  res.cookie(config.cookie, authToken, opts) // cookie 有效期30天
}

// 验证用户是否登录
exports.authUser = function (req, res, next) {
  res.locals.user = null
  const authToken = req.signedCookies[config.cookie]
  if (!authToken) {
    return next()
  } else {
    User.getByUserId(authToken).then(function (user) {
      if (!user) {
        return next()
      }
      user = res.locals.user = req.session.user = new UserModel(user)
      next()
    })
  }
}
