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
    radioItems: [
      { name: '生活类物资', value: '0',dbname:'lifeSup'},
      { name: '救生类物资', value: '1', dbname: 'saveSup'},
      { name: '动力燃料', value: '2', dbname: 'powerSup'},
      { name: '医用类物资', value: '3', dbname: 'medSup'},
      { name: '取暖御寒类物资', value: '4', dbname: 'warmSup'}
    ]

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
      markers: [{
        id: 1,
        latitude: options.lat,
        longitude: options.lon
      }]
    });
  },
  toStoreDetail: function(e){
    console.log(e)
    wx.navigateTo({
      url: '../storeDetail/storeDetail?dbname=' + e.currentTarget.dataset.dbname + '&id='+e.currentTarget.dataset.id+'&name='+this.data.name
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