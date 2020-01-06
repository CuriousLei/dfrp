// miniprogram/pages/reservice/unitRepoAfter/storeDetail/storeDetail.js
var sliderWidth = 10;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    sliderWidth:0,
    allRes:[],
    currentRes:[],
    repCode: { '一号仓库': 'unit01', '二号仓库': 'unit02', '三号仓库': 'unit03', '四号仓库': 'unit04', '五号仓库': 'unit05', '六号仓库': 'unit06', '红十字会一号仓库': 'soci01'}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

    console.log(options)
    var id=options.id
    var dbname=options.dbname
    var code=this.data.repCode[options.name]
    console.log(code)
    const db = wx.cloud.database()
    const _ = db.command
    db.collection('supplydb')
      .limit(10) // 限制返回数量为 10 条
      .where({
        repId: _.eq(code)
      })
      .get()
      .then(res => {
        console.log(res)
        //var data=res.data[id][dbname]
        var data = res.data[0][dbname]
        that.setData({
          tabs: data.category,
          sliderWidth: 20 / data.category.length,
          allRes: data.res,
          currentRes: data.res[0]
        })
        
      })
  },

  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id,
      currentRes: this.data.allRes[e.currentTarget.id]
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