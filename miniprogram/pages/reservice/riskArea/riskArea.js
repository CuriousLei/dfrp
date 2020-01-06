// miniprogram/pages/reservice/riskArea/riskArea.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 35.828213,
    longitude: 105.490047,
    circles: [{
      latitude: '29.731813',
      longitude: '92.822096',
      //color: '#FF0000DD',
      fillColor: '#F78181DD',
      radius: 200000,
      strokeWidth: 2
    },
      {
        latitude: '28.276227',
        longitude: '102.830226',
        //color: '#FF0000DD',
        fillColor: '#F78181DD',
        radius: 350000,
        strokeWidth: 2
      },
      {
        latitude: '36.088612',
        longitude: '108.055058',
        //color: '#FF0000DD',
        fillColor: '#F78181DD',
        radius: 350000,
        strokeWidth: 2
      },
      {
        latitude: '42.376927',
        longitude: '124.980571',
        //color: '#FF0000DD',
        fillColor: '#F78181DD',
        radius: 200000,
        strokeWidth: 2
      }],
    radioItems: [
      { name: '青藏高原边缘山区', value: '0',  lon: 92.822096, lat: 29.731813 },
      { name: '横断山区', value: '1', lon: 102.830226, lat: 28.276227 },
      { name: '黄土高原山区', value: '2', lon: 108.055058, lat: 36.088612 },
      { name: '北方山区', value: '3', lon: 124.980571, lat: 42.376927 }
    ]
  },
  toUnitRepoPre:function(e){
    console.log(e)
    var target=e.currentTarget.dataset
    wx.navigateTo({
      url: '../unitRepoPre/unitRepoPre?id=' + target.id+'&lon='+target.lon+'&lat='+target.lat
    })
  }
})