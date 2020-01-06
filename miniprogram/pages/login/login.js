// miniprogram/pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.identity)
  },
  changeIdentity:function(e){
    console.log(e)
    var idenId=e.currentTarget.dataset.id
    var stateId=""
    wx.request({
      url: "https://debrisflow.cn/changeIdentity.php",
      data: {'openid':app.openid, 'identity': idenId },
      method: 'post',
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res)
        app.btnIdList = res.data.data.btnList
        app.artIdList = res.data.data.artList
        stateId=res.data.state
        app.situation = app.stateList[stateId]
        app.identity = app.idenList[idenId]

        wx.navigateBack({
          delta: -1
        });
      }
    })

    
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function (param) {
    
  }
})