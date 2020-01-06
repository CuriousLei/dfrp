// miniprogram/pages/ordPeople/ucenter/ucenter.js
const app = getApp()
Page({
  data: {
    identity:"普通群众",
    situation:"备灾"
  },
  peoDisaPre:function(e){
    this.setData({
      situation: "备灾"
    });
    app.situation = "备灾"
    if(app.user=="people"){
      app.resourceTab.tabs = ['募捐通道']
      app.resourceTab.tabIndex = [5]
      app.resourceTab.activeIndex = 5
      app.articalControl.db = "loredb"
      app.articalControl.title = "loreTitle"
      app.articalControl.seg = "loreSegment"

      app.btnIdList=[4]
    } else if (app.user == "unit"){
      app.resourceTab.tabs = ['存储库']
      app.resourceTab.tabIndex = [1]
      app.resourceTab.activeIndex = 1
      app.articalControl.db = "predictdb"
      app.articalControl.title = "predictTitle"
      app.articalControl.seg = "predictSegment"

      app.btnIdList = [0]
    }

  },
  peoDisaAfter: function (e) {
    this.setData({
      situation: "救灾"
    });
    app.situation ="救灾"
    if (app.user == "people") {
      app.resourceTab.tabs = ['安置点', '医院']
      app.resourceTab.tabIndex = [2, 4]
      app.resourceTab.activeIndex = 2
      app.articalControl.db = "psydb"
      app.articalControl.title = "psyTitle"
      app.articalControl.seg = "psySegment"

      app.btnIdList = [1,2]
    } else if (app.user == "unit") {
      app.resourceTab.tabs = ['就援点', '存储库', '安置点', '灾情']
      app.resourceTab.tabIndex = [0, 1, 2, 3]
      app.resourceTab.activeIndex = 0
      app.articalControl.db = "reportdb"
      app.articalControl.title = "reportTitle"
      app.articalControl.seg = "reportSegment"

      app.btnIdList = [2,3 ,5]
    }
  },
test: function(e){
  console.log(e)
  wx.navigateTo({
    url: '../../ordPeople/predict/predict'
  })
},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options){
    console.log(app.identity, app.situation)
    this.setData({
      identity:app.identity,
      situation:app.situation
    });
  }
})