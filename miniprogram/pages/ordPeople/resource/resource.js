var sliderWidth = 0; // 需要设置slider的宽度，用于计算中间位置
var QQMapWX = require('../../../lib/qqmap-wx-jssdk.min.js');
var qqmapsdk;
const app = getApp()

Page({
  data: {
    tabs: ["救援队", "存储库","安置点","灾情","医院","募捐通道"],
    tabIndex: [0,1,2,3,4,5],
    activeIndex: 1,
    actIndex:0,
    sliderOffset: 0,
    sliderLeft: 0,
    latitude: 40.299999,
    longitude: 115.949997,
    scale:7,
    polygons:[{
      points: [
        { latitude: 39.9, longitude: 116.2 },
        { latitude: 40.05, longitude: 116.15 },
        { latitude: 40.1, longitude: 116.2 },
        { latitude: 40, longitude: 116.4 },
        { latitude: 39.95, longitude: 116.39}
      ],
      strokeColor:"#ff0000"
    }],
    placementMarkers:[
      {
        id: 1,
        latitude: 39.92,
        longitude: 116.26,
        title: '1号安置点',
        label: {
          content: "1号安置点",
          color: "#ff0000"
        }
      },
      {
        id: 2,
        latitude: 39.93,
        longitude: 116.4,
        title: '2号安置点',
        label: {
          content: "2号安置点",
          color: "#ff0000"
        }
      },
      {
        id: 3,
        latitude: 39.99,
        longitude: 116.43,
        title: '3号安置点',
        label: {
          content: "3号安置点",
          color: "#ff0000"
        }
      }
    ],
    rescueMarkers: [
      {
        id: 1,
        latitude: 39.89,
        longitude: 116.1,
        title: '武警交通第六支队',
        label: {
          content: "武警交通第六支队",
          color: "#ff0000"
        }
      },
      {
        id: 2,
        latitude: 39.93,
        longitude: 116.4,
        title: '民工部队',
        label: {
          content: "民工部队",
          color: "#ff0000"
        }
      },
      {
        id: 3,
        latitude: 40.2,
        longitude: 116.43,
        title: '第三军工团',
        label: {
          content: "第三军工团",
          color: "#ff0000"
        }
      }
    ],
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
    markers: [
      {
      id: 1,
      latitude: 40.299999,
      longitude: 115.949997,
      title: '一号仓库',
      label:{
        content:"一号仓库",
        color:"#ff0000"
      }
      },
      {
        id: 2,
        latitude: 39.849998,
        longitude: 116.099998,
        title: '二号仓库',
        label: {
          content: "二号仓库",
          color: "#ff0000"
        }
      },
      {
        id: 3,
        latitude: 40.833332,
        longitude: 116.449997,
        title: '三号仓库',
        label: {
          content: "三号仓库",
          color: "#ff0000"
        }
      },
      {
        id: 4,
        latitude: 39.516666,
        longitude: 116.633331,
        title: '四号仓库',
        label: {
          content: "四号仓库",
          color: "#ff0000"
        }
      },
      {
        id: 5,
        latitude: 40.583332,
        longitude: 116.566666,
        title: '五号仓库',
        label: {
          content: "五号仓库",
          color: "#ff0000"
        }
      },
      {
        id: 6,
        latitude: 39.066666,
        longitude: 116,
        title: '六号仓库',
        label: {
          content: "六号仓库",
          color: "#ff0000"
        }
      }],

    radioItems: [
      { name: '一号仓库', value: '0', checked: true, lon: 115.949997, lat: 40.299999 },
      { name: '二号仓库', value: '1',lon:116.099998,lat:39.849998},
      { name: '三号仓库', value: '2', lon: 116.449997, lat: 40.833332 },
      { name: '四号仓库', value: '3', lon: 116.633331, lat: 39.516666},
      { name: '五号仓库', value: '4', lon: 116.566666, lat: 40.583332 },
      { name: '六号仓库', value: '5', lon: 116, lat: 39.066666 }
    ]
  },
  onLoad: function () {
    this.mapCtx = wx.createMapContext('myMap')
    // var that = this;
    // wx.getSystemInfo({
    //   success: function (res) {
    //     that.setData({
    //       sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
    //       sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
    //       tabs: app.resourceTab.tabs,
    //       tabIndex: app.resourceTab.tabIndex,
    //       activeIndex: app.resourceTab.activeIndex
    //     });
    //   }
    // });
  },
  //外部链接
  externalLink: function(e){
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
  tabClick: function (e) {
    console.log("test",e.currentTarget)
    this.setData({
      //sliderOffset: e.currentTarget.offsetLeft,
      actIndex: parseInt(e.currentTarget.id),
      activeIndex: this.data.tabIndex[e.currentTarget.id]//通过tabIndex来确定展示哪些标签页
    });
    app.resourceTab.activeIndex=this.data.activeIndex
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    var k;
    for (var i = 0, len = radioItems.length; i < len; i++) {
      if(radioItems[i].value == e.detail.value){
        k=i;
      }
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }
    console.log(radioItems[k]);
    this.setData({
      radioItems: radioItems,
      latitude: radioItems[k]['lat'],
      longtitude: radioItems[k]['lon']
    });
  },
  toStoreInfo: function (option) {
    var temp=option.currentTarget.dataset
    var i=temp.id

    wx.navigateTo({
      url: '../storeInfo/storeInfo?name=' + temp.name + '&lon=' + this.data.radioItems[i]['lon'] + '&lat=' + this.data.radioItems[i]['lat']+'&id='+i,
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
    console.log(app.resourceTab)
    this.setData({
      actIndex: app.resourceTab.activeIndex
    });
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          tabs: app.resourceTab.tabs,
          tabIndex: app.resourceTab.tabIndex,
          activeIndex: app.resourceTab.activeIndex
        });
        console.log(that.data.tabs.length)
        that.setData({

          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(this.actIndex)
    //app.resourceTab.activeIndex = this.actIndex
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function (param) {

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
});