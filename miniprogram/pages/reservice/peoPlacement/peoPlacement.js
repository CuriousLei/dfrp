// miniprogram/pages/reservice/peoPlacement/peoPlacement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    placementMarkers: [
      {
        id: 1,
        latitude: 33.80,
        longitude: 104.35,
        title: '1号安置点',
        label: {
          content: "1号安置点",
          color: "#ff0000"
        }
      },
      {
        id: 2,
        latitude: 33.83,
        longitude: 104.42,
        title: '2号安置点',
        label: {
          content: "2号安置点",
          color: "#ff0000"
        }
      },
      {
        id: 3,
        latitude: 33.82,
        longitude: 104.35,
        title: '3号安置点',
        label: {
          content: "3号安置点",
          color: "#ff0000"
        }
      }
    ],
    polygons: [{
      points: [
        { latitude: 33.78, longitude: 104.36 },
        { latitude: 33.78, longitude: 104.41 },
        { latitude: 33.81, longitude: 104.44 },
        { latitude: 33.83, longitude: 104.40 },
        { latitude: 33.82, longitude: 104.37 }
      ],
      strokeColor: "#ff0000"
    }]
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