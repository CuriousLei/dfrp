// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const {segIdList}=event
  const db = cloud.database()
  const res=await db.collection('loredb')
    .limit(10) // 限制返回数量为 10 条
    .get()
    .then(res => {
      console.log(res)
      return res.data[1].loreSegment
    })
  console.log(segIdList)
    var segList=[]
    for(var item of res){
      if (segIdList.includes(item.id)){
        segList.push(item)
      }
    }
  return segList
}