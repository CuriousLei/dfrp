// 云函数入口文件
const cloud = require('wx-server-sdk')
const app = getApp()
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  //return { res: "ok" }
  const db = wx.cloud.database()
  db.collection(app.articalControl.db)
    .limit(10) // 限制返回数量为 10 条
    .get()
    .then(res => {
      console.log(res.data)
      return res.data
    })
    return {res:"ok"}
}