// miniprogram/pages/reservice/peohospital/peohospital.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hosMarkers: [
      {
        id: 1,
        latitude: 39.92,
        longitude: 116.32,
        title: '海淀医院',
        label: {
          content: "海淀医院",
          color: "#ff0000"
        }
      },
      {
        id: 2,
        latitude: 39.96,
        longitude: 116.4,
        title: '北医三院',
        label: {
          content: "北医三院",
          color: "#ff0000"
        }
      },
      {
        id: 3,
        latitude: 39.99,
        longitude: 116.44,
        title: '朝阳医院',
        label: {
          content: "朝阳医院",
          color: "#ff0000"
        }
      }],
    polygons: [{
      points: [
        { latitude: 39.9, longitude: 116.2 },
        { latitude: 40.05, longitude: 116.15 },
        { latitude: 40.1, longitude: 116.2 },
        { latitude: 40, longitude: 116.4 },
        { latitude: 39.95, longitude: 116.39 }
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