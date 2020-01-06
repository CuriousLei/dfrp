// miniprogram/pages/peoIndex/peoIndex.js
const app = getApp()
var bmap = require('../../../lib/bmap-wx.min.js');
Page({
  data: {
    list: [],
    hidden: true,
    identity: "",
    situation:""
  },
  /**
 * 生命周期函数--监听页面隐藏
 */
  onHide: function () {
    //this.data.list.splice(0, this.data.list.length)
    // this.setData({
    //   list: []
    // });
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options){
    var identity = "0";
    var state = "0";
    wx.request({
      url: "https://debrisflow.cn/getInit.php",
      data: { 'code': app.loginCode },
      method: 'post',
      header: { 'Content-Type': 'application/json' },
      success: function (result) {
        console.log(result)
        app.openid = result.data.data.openid
        app.session_key = result.data.data.session_key
        if (result.data.data.state && result.data.data.identity) {
          app.identity = app.idenList[result.data.data.identity]
          app.situation = app.stateList[result.data.data.state]
          app.btnIdList = result.data.data.btnList
          app.artIdList = result.data.data.artList

          identity = result.data.data.identity
          state = result.data.data.state
        }

      }
    })
    //获取经纬度
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        app.latitude = res.latitude
        app.longitude = res.longitude
        if (app.latitude == "" || app.longitude == "" || app.openid == "" || app.session_key == "") {
        } else {
          wx.request({
            url: "https://debrisflow.cn/login.php",
            data: { 'openid': app.openid, 'longitude': app.longitude, 'latitude': app.latitude, 'state': state, 'identity': identity },
            method: 'post',
            header: { 'Content-Type': 'application/json' },
            success: function (result) {
              console.log(result)
            }
          })
        }
      },
      fail: function (res) {
        console.log(res)
      }
    })
    //获取天气数据
    var BMap = new bmap.BMapWX({
      ak: 'XIoALMsGHABXrGSCT46ak5jKacZ7fQfo'
    });
    var fail = function (data) {
      console.log('fail!!!!')
    };
    var success = function (data) {
      console.log('success!!!');
      app.baiduData = data.currentWeather[0];

      wx.request({
        url: 'https://api.help.bj.cn/apis/weather/?id=101010200',
        success: function (res) {
          app.apiData = res.data
          console.log(app.baiduData, app.apiData)
        }
      })

    }
    BMap.weather({
      fail: fail,
      success: success
    });
    this.setData({
      identity: identity,
      situation: state
    });
  },
  /**
  * 生命周期函数--监听页面卸载
  */
  onUnload: function (param) {
    // this.setData({
    //   identity: app.identity,
    //   situation: app.situation
    // })
    //向服务器发起请求，获取用户当前状态
    
  },
  onShow: function (){
    console.log(this.identity, app.identity, this.situation, app.situation)
    if (this.identity != app.identity || this.situation != app.situation){
      this.setData({
        list: [],
        hidden: false,
        identity: app.identity,
        situation: app.situation
      });
      this.identity = app.identity
      this.situation=app.situation
      console.log(this.identity, app.identity, this.situation, app.situation)
      const db = wx.cloud.database()
      const _ = db.command
      var list = []

      var title = app.articalControl.title
      console.log(app.articalControl.db)
      db.collection('articledb')
        .limit(10) // 限制返回数量为 10 条
        .where({
          id:_.in(app.artIdList)
        })
        .get()
        .then(res => {
          console.log(res)
          //var LT = res.data[0][title]
          var LT = res.data
          app.globalData.title = LT //为全局变量赋上文字数据
          console.log(app.globalData)
          wx.cloud.callFunction({
            name: 'getLoreTitleImg',
            data: { loreTitle: LT },
            success: res => {
              console.log(res.result)
              app.globalData.img = res.result //为全局变量赋上图片URL数据

              list = this.data.list;
              var imgUrl = app.globalData.img;
              var info = app.globalData.title;
              for (var i = 0, len = imgUrl.length; i < len; ++i) {
                var item = {}
                item.id = i
                item.name = info[i].name
                item.intro = info[i].intro
                item.imgUrl = imgUrl[i].tempFileURL
                list.push(item)
                console.log(list)
                this.setData({
                  list: list,
                  hidden: true
                });
              }
            }
          })
        })
    }
  },
  toArticle: function(option){
    console.log(option)
    wx.navigateTo({
      url: '../article/article?ltid='+option.currentTarget.id,
    })
  }
});