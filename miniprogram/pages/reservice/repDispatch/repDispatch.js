// miniprogram/pages/reservice/unitRepoPre/unitRepoPre.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 40.299999,
    longitude: 115.949997,
    scale: 9,
    markers: [
      {
        id: 1,
        latitude: 40.299999,
        longitude: 115.949997,
        title: '一号仓库',
        label: {
          content: "一号仓库",
          color: "#ff0000"
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
      { name: '二号仓库', value: '1', lon: 116.099998, lat: 39.849998 },
      { name: '三号仓库', value: '2', lon: 116.449997, lat: 40.833332 },
      { name: '四号仓库', value: '3', lon: 116.633331, lat: 39.516666 },
      { name: '五号仓库', value: '4', lon: 116.566666, lat: 40.583332 },
      { name: '六号仓库', value: '5', lon: 116, lat: 39.066666 }
    ],
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
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    var k;
    for (var i = 0, len = radioItems.length; i < len; i++) {
      if (radioItems[i].value == e.detail.value) {
        k = i;
      }
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }
    console.log(radioItems[k]);
    this.setData({
      radioItems: radioItems
      // latitude: radioItems[k]['lat'],
      // longtitude: radioItems[k]['lon']
    });
  },
  toDispatch: function (option) {
    var temp = option.currentTarget.dataset
    var i = temp.id
    var that=this
    if(i==5){
      var item
      for (item of this.data.radioItems) {
        if (item.value == i) {
          break
        }
      }
      wx.showActionSheet({
        itemList: ['运输节点1', '运输节点2'],
        success: function (res) {
          if (!res.cancel) {
            console.log(res)

            var j = res.tapIndex + 1
            var name = temp.name + "运输节点" + j
            wx.navigateTo({
              url: 'dispatch/dispatch?name=' + name + '&lon=' + item['lon'] + '&lat=' + item['lat'] + '&id=' + i,
            })
          }
        }
      });
    }
    
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.identity == "社会力量") {
      var markers = [{
        id: 6,
        latitude: 39.066666,
        longitude: 116,
        title: '红十字会一号仓库',
        label: {
          content: "红十字会一号仓库",
          color: "#ff0000"
        }
      }]
      var items = [{ name: '红十字会一号仓库', value: '5', lon: 116, lat: 39.066666 }]
      
      this.setData({
        markers: markers,
        radioItems: items
      })
    }
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