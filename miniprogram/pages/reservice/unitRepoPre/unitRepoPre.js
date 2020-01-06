// miniprogram/pages/reservice/unitRepoPre/unitRepoPre.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 40.299999,
    longitude: 115.949997,
    scale: 7,
    markers:[],
    allMarkers: [[
      {
        id: 1,
        latitude: 30.109945,
        longitude: 92.440927,
        title: '一号仓库',
        label: {
          content: "一号仓库",
          color: "#ff0000"
        }
      },
      {
        id: 2,
        latitude: 30.397448,
        longitude: 90.454019,
        title: '二号仓库',
        label: {
          content: "二号仓库",
          color: "#ff0000"
        }
      }],
      [{
        id: 3,
        latitude: 28.008669,
        longitude: 102.927386,
        title: '三号仓库',
        label: {
          content: "三号仓库",
          color: "#ff0000"
        }
      },
      {
        id: 4,
        latitude: 28.562397,
        longitude: 101.602781,
        title: '四号仓库',
        label: {
          content: "四号仓库",
          color: "#ff0000"
        }
      }],
      [{
        id: 5,
        latitude: 35.482889,
        longitude: 106.275694,
        title: '五号仓库',
        label: {
          content: "五号仓库",
          color: "#ff0000"
        }
      },
      {
        id: 6,
        latitude: 36.766489,
        longitude: 107.894657,
        title: '六号仓库',
        label: {
          content: "六号仓库",
          color: "#ff0000"
        }
      }],
      [{
        id: 7,
        latitude: 41.905821,
        longitude: 124.525813,
        title: '七号仓库',
        label: {
          content: "七号仓库",
          color: "#ff0000"
        }
      },
        {
          id: 8,
          latitude: 41.657951,
          longitude: 122.612494,
          title: '八号仓库',
          label: {
            content: "八号仓库",
            color: "#ff0000"
          }
        }]],
    radioItems:[],
    allRadioItems: [
      [{ name: '一号仓库', value: '0', lon: 90.454019, lat: 30.397448 },
        { name: '二号仓库', value: '1', lon: 92.440927, lat: 30.109945 }],
      [{ name: '三号仓库', value: '2', lon: 102.927386, lat: 28.008669 },
        { name: '四号仓库', value: '3', lon: 101.602781, lat: 28.562397 }],
      [{ name: '五号仓库', value: '4', lon: 106.275694, lat: 35.482889 },
        { name: '六号仓库', value: '5', lon: 107.894657, lat: 36.766489 }],
      [{ name: '七号仓库', value: '6', lon: 124.525813, lat: 41.905821 },
        { name: '八号仓库', value: '7', lon: 122.612494, lat: 41.657951 }]
    ]
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
      radioItems: radioItems,
      latitude: radioItems[k]['lat'],
      longtitude: radioItems[k]['lon']
    });
  },
  toStoreInfo: function (option) {
    var temp = option.currentTarget.dataset
    var i = temp.id
    console.log(option)
    var item
    for (item of this.data.radioItems){
      if(item.value==i){
        break
      }
    }
    wx.navigateTo({
      url: 'storeInfo/storeInfo?name=' + temp.name + '&lon=' + item['lon'] + '&lat=' + item['lat'] + '&id=' + i,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    if(app.identity=="社会力量"){
      var markers = this.data.allMarkers[options.id]
      var items = this.data.allRadioItems[options.id]
      for(var j=0;j<2;j++){
        markers[j]['title'] = "红十字会" + markers[j]['title']
        markers[j].label.content = "红十字会" + markers[j].label.content
        items[j]['name'] = "红十字会" + items[j]['name']
      }
      this.setData({
        markers: markers,
        longitude: options.lon,
        latitude: options.lat,
        radioItems: items
      })
    }else{
      this.setData({
        markers: this.data.allMarkers[options.id],
        longitude: options.lon,
        latitude: options.lat,
        radioItems: this.data.allRadioItems[options.id]
      })
    }
    
  }

})