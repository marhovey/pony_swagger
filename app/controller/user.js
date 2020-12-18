'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx, service, app } = this;
    const userRule = {
      username: 'string',
      password: 'string'
    }
    ctx.validate(userRule)
    const data = ctx.request.body
    const res = await ctx.service.user.login(data)
    if(res) {
      const token = app.jwt.sign({
        userID: res._id,	//需要存储的Token数据
      }, app.config.jwt.secret)
      ctx.cookies.set('sid', token)
      ctx.body = JSON.stringify({
        errCode: 0,
        errMsg: '操作成功',
        data: {
          userName: res.userName
        }
      })
    } else {
      ctx.body = JSON.stringify({
        errCode: 1,
        errMsg: '账户或密码错误'
      })
    }
  }
}

module.exports = UserController;
