// miniprogram/pages/reservice/peoFunds/peoFunds.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //外部链接
  externalLink: function (e) {
    console.log(e)
    wx.showModal({
      title: '这是一个外部链接',
      content: '小程序暂不支持打开外部链接，可点击复制链接后在浏览器中粘贴查看',
      confirmText: "复制链接",
      cancelText: "取消",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          wx.setClipboardData({
            data: e.currentTarget.dataset.url,
            success: function (res) {
              wx.getClipboardData({
                　　　　　　　　　　success: function (res) {
                  　　　　　　　　　　　　wx.showToast({
                    　　　　　　　　　　　　　　title: '复制成功'
                  })
                }
              })
            }
          })
        } else {
          console.log('用户点击辅助操作')
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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