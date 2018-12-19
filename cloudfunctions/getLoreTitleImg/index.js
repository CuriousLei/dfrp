// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const {loreTitle}=event
  var fileList=[]
  for(var item of loreTitle){
    fileList.push(item.imgurl)
  }
//  const fileList = ['cloud://ld-91cf0d.6c64-ld-91cf0d/peoLore/loreTitle1.jpg', 'cloud://ld-91cf0d.6c64-ld-91cf0d/peoLore/loreTitle2.jpg','cloud://ld-91cf0d.6c64-ld-91cf0d/peoLore/loreTitle3.jpg']
  const result = await cloud.getTempFileURL({
    fileList,
  })
  return result.fileList
}