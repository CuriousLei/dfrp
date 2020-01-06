// miniprogram/pages/resoEntry/resoEntry.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnList:[],
    allBtnList: [{ id: 0, name: "储备库", navi:'../reservice/riskArea/riskArea'},
      { id: 1, name: "医院", navi:'../reservice/peohospital/peohospital'},
      { id: 2, name: "安置点", navi: '../reservice/peoPlacement/peoPlacement'},
      { id: 3, name: "救灾储备库", navi:'../reservice/unitRepoAfter/unitRepoAfter'},
      { id: 4, name: "募捐通道", navi:'../reservice/peoFunds/peoFunds'},
      { id: 5, name: "灾评数据", navi: '../reservice/disaState/disaState'},
      {id:6,name:"承保信息",navi:'../reservice/insuList/insuList'},
      {id:7,name:"理赔预估",navi:'../reservice/cliam/cliam'},
      { id: 8, name: "物资调度", navi:'../reservice/repDispatch/repDispatch'},
      {id:9,name:"舆情监测",navi:'../reservice/pom/pom'}]
  },
  gotoreso: function (e){
    console.log(e)
    wx.navigateTo({
      url: e.currentTarget.dataset.navi
    })
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
    console.log(app.btnIdList)
    var idList = app.btnIdList
    var btns = []
    for (var i of idList) {
      btns.push(this.data.allBtnList[i])
    }

    this.setData({
      btnList: btns
    })
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