// miniprogram/pages/peoIndex/peoIndex.js
const app = getApp()
Page({
  data: {
    list: []
  },
  onLoad: function (){
    const db = wx.cloud.database()
    var list=[]
    db.collection('loredb')
      .limit(10) // 限制返回数量为 10 条
      .get()
      .then(res => {
        var LT = res.data[0].loreTitle
        app.globalData.loreTitle = LT

        wx.cloud.callFunction({
          name: 'getLoreTitleImg',
          data: { loreTitle: LT },
          success: res => {

            app.globalData.loreTImg = res.result
            list = this.data.list;
            var imgUrl = app.globalData.loreTImg;
            var info = app.globalData.loreTitle;
            for (var i = 0, len = imgUrl.length; i < len; ++i) {
              var item = {}
              item.id = i
              item.name = info[i].name
              item.intro = info[i].intro
              item.imgUrl = imgUrl[i].tempFileURL
              list.push(item)
              this.setData({
                list: list
              });
            }
          }
        })
      })
  },
  toArticle: function(option){
    console.log(option)
    wx.navigateTo({
      url: '../article/article?ltid='+option.currentTarget.id,
    })
  }
});