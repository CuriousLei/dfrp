// miniprogram/pages/ordPeople/article/article.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headline:"",
    intro:"",
    titleImg:"",
    textTitle:[],
    segment:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var id = options.ltid
    var head=app.globalData.loreTitle[id]
    
    
    wx.cloud.callFunction({
      name: 'getSegments',
      data: { segIdList: head.textTitle},
      success: res => {
        this.setData({
          segment: res.result
        })
      }
    })

    this.setData({
      headline: head.name,
      intro: head.intro,
      titleImg: app.globalData.loreTImg[id].tempFileURL
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function (param) {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})