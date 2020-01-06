// miniprogram/pages/editInfo/editInfo.js
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

  },
  submit:function(e){
    var phone=e.detail.value.phone
    console.log(phone)
    wx.switchTab({
      url: '../ordPeople/ucenter/ucenter',
    })
    wx.request({
      url: "https://debrisflow.cn/addPhone.php",
      data: { 'openid': app.openid, 'phone':phone},
      method: 'post',
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res)
      }
    })
  }
})