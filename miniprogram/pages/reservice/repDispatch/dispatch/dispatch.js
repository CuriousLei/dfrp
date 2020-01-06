// miniprogram/pages/reservice/repDispatch/dispatch/dispatch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    latitude: 34.46,
    longitude: 104.16,
    scale: 8,
    markers: [
      {
        id: 1,
        latitude: 35.70,
        longitude: 104.02
      },{
        id:2,
        latitude:34.76,
        longitude:104.20
       // iconPath:'../../../../images/hc.gif'
      }],
    polygons: [{
      points: [
        { latitude: 33.78, longitude: 104.36 },
        { latitude: 33.78, longitude: 104.41 },
        { latitude: 33.81, longitude: 104.44 },
        { latitude: 33.83, longitude: 104.40 },
        { latitude: 33.82, longitude: 104.37 }
      ],
      strokeColor: "#ff0000"
    }],
    polyline:[{
      points: [
        { latitude: 35.70, longitude: 104.02 },
        { latitude: 34.76, longitude: 104.2 }
      ],
      color: "#fb9108",
      width: 4,
      dottedLine: false,
      arrowLine: true,
      borderColor: "#000",
      borderWidth: 5
    }, {
        points: [
          { latitude: 34.76, longitude: 104.2 },
          { latitude: 33.82, longitude: 104.37 }
        ],
        color: "#fb9108",
        width: 2,
        dottedLine: false,
        arrowLine: true,
        borderColor: "#000",
        borderWidth: 5
      }],
    newsList: [{ time: '2019-3-21 20:30', content: '到达岷县' },{ time: '2019-3-21 17:01', content: '从兰州出发' }]
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      name: options.name,
      // latitude: options.lat,
      // longitude: options.lon,
      markers: [{
        id: 1,
        latitude: 35.7,
        longitude: 104.02
      },{
          id: 2,
          latitude: 34.76,
          longitude: 104.20,
          iconPath:'../../../../images/hc.gif',
          width:25,
          height:20,
          callout:{
            content:"预计3月22日3点到达舟曲",
            display: "ALWAYS",
            color: "#fff8e4",
            fontSize: "16",
            borderRadius: "10",
            bgColor: "#fc5700",
            padding: "10",
          }
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