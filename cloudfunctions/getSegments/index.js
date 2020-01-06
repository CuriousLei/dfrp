// 云函数入口文件
const cloud = require('wx-server-sdk')
const app = getApp()
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const {segIdList}=event
  const db = cloud.database()
  console.log(app.articalControl.db)
  const res = await db.collection(app.articalControl.db)
    .limit(10) // 限制返回数量为 10 条
    .get()
    .then(res => {
      
      return res.data[1]
    })
    return res
console.log('test',res)
  console.log(segIdList)
    var segList=[]
    for(var item of res){
      if (segIdList.includes(item.id)){
        segList.push(item)
      }
    }
  return segList
}