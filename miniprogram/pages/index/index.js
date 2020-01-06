// miniprogram/pages/index/index.js
var bmap = require('../../lib/bmap-wx.min.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    //获取openid
    wx.login({
      success(res) {
        console.log(res)
        app.loginCode=res.code

      }
    })
    
    
    wx.getSetting({
      success(res) {
        // if (res.authSetting['scope.userInfo']) {
        //   // 如果已经授权，直接跳转到peoIndex
        //   wx.switchTab({
        //     url: '../ordPeople/peoIndex/peoIndex',
        //   })
          
        // }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
    wx.getUserInfo({
      success(res) {
        console.log(res.userInfo)
      }
    })
    wx.switchTab({
      url: '../ordPeople/peoIndex/peoIndex',
    })
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
  onUnload: function () {

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