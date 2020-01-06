// miniprogram/pages/ordPeople/storeInfo/storeInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    latitude: 40.299999,
    longitude: 115.949997,
    scale: 13,
    markers: [
      {
        id: 1,
        latitude: 40.299999,
        longitude: 115.949997
      }],
    allProgress: [[76, 65, 45, 23, 98], [72, 69, 54, 32, 89], [70, 68, 34, 53, 78], [67, 65, 67, 56, 78], [76, 66, 47, 88, 56], [33, 56, 38, 87, 28]],
    progress: [76, 65, 45, 23, 98],
    pernum:["766/1211","65/100","89/201","2456/12341","48/55"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      name: options.name,
      latitude: options.lat,
      longitude: options.lon,
      progress: this.data.allProgress[options.id],
      markers: [{
        id: 1,
        latitude: options.lat,
        longitude: options.lon
      }]
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