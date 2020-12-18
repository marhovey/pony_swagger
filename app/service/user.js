'use strict';

const Service = require('egg').Service;
const crypto = require('crypto');

class UserService extends Service {
  async login(user) {
    const data = await this.getUser(user.username)
    let res
    if(!data) {
      res = await this.register(user)
    } else {
      res = await this.validUser(user, data)
    }
    return res
  }
  async validUser(user, data) {
    const {password} = data
    let paramPassword = user.password
    paramPassword = crypto.createHash('md5').update(paramPassword).digest('hex')
    if(password === paramPassword) {
      return data
    }
    return false
  }
  async getUser(id) {
    const {ctx} = this
    const userData = await ctx.model.User.findOne({userName: id})
    return userData
  }
  async register(user) {
    const {ctx} = this
    const account = new ctx.model.User()
    account.userName = user.username
    account.password = crypto.createHash('md5').update(user.password).digest('hex')
    return account.save()
  }
}

module.exports = UserService