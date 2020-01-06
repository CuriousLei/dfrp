//let utils = require('../../utils/utils')
var bmap = require('../../lib/bmap-wx.min.js');
const app = getApp()
import * as echarts from '../../lib/ec-canvas/echarts';
let globalData = getApp().globalData
const key = globalData.key
let SYSTEMINFO = globalData.systeminfo
let prcp=''
let prcp24h=''
let humidity=''
Page({
  data: {
    grids: [0, 1, 2, 3, 4, 5, 6, 7],
    factor: ['实时温度(℃)', '风向', '风力', '风速', '天气状况', '气压(hPa)', '能见度','pm25(μg/m3)'],
    factorNames:['temp','wd','wdforce','wdspd','weather','stp','wisib','pm25'],
    values:[],
    uptime:'',
    date:'',
    ecBar: {
      onInit: function (canvas, width, height) {
        const gaugeChart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(gaugeChart);
        gaugeChart.setOption(getGaugeOption());
        return gaugeChart;
      }
    },
    ecScatter: {
      onInit: function (canvas, width, height) {
        const waterChart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(waterChart);
        waterChart.setOption(getWaterOption());

        return waterChart;
      }
    },
    ecSoil: {
      onInit: function (canvas, width, height) {
        const soilChart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(soilChart);
        soilChart.setOption(getSoilOption());

        return soilChart;
      }
    },
    detailsDic: {
      key: ['tmp', 'fl', 'hum', 'pcpn', 'wind_dir', 'wind_deg', 'wind_sc', 'wind_spd', 'vis', 'pres', 'cloud', ''],
      val: {
        tmp: '温度(℃)',
        fl: '体感温度(℃)',
        hum: '相对湿度(%)',
        pcpn: '降水量(mm)',
        wind_dir: '风向',
        wind_deg: '风向角度(deg)',
        wind_sc: '风力(级)',
        wind_spd: '风速(mk/h)',
        vis: '能见度(km)',
        pres: '气压(mb)',
        cloud: '云量',
      },
    },
    lifestyles: {
      'comf': '舒适度指数',
      'cw': '洗车指数',
      'drsg': '穿衣指数',
      'flu': '感冒指数',
      'sport': '运动指数',
      'trav': '旅游指数',
      'uv': '紫外线指数',
      'air': '空气污染扩散条件指数',
      'ac': '空调开启指数',
      'ag': '过敏指数',
      'gl': '太阳镜指数',
      'mu': '化妆指数',
      'airc': '晾晒指数',
      'ptfc': '交通指数',
      'fsh': '钓鱼指数',
      'spi': '防晒指数',
    },

    bcgImg: '../../images/beach-bird-birds-235787.jpg',
    bcgImgAreaShow: false,
    bcgColor: '#2d2225',
    weatherData:{},
  },
  onLoad: function () {
    // var that = this;
    // var BMap = new bmap.BMapWX({
    //   ak: 'XIoALMsGHABXrGSCT46ak5jKacZ7fQfo'
    // });
    // var fail = function (data) {
    //   console.log('fail!!!!')
    // };
    // var success = function (data) {
    //   console.log('success!!!');
    //   var weatherData = data.currentWeather[0];
    //   console.log(weatherData)
    //   // weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind + '\n';
    //   // that.setData({
    //   //   weatherData: weatherData
    //   // });
    //   wx.request({
    //     url: 'https://api.help.bj.cn/apis/weather/?id=101010200',
    //     success: function (res) {
    //       var values = []
    //       console.log(res)
    //       for (var temp of that.data.factorNames) {
    //         if (!res.data[temp]) {
    //           values.push("N/A")
    //         } else if (temp == "wdspd") {
    //           var arr = res.data[temp].split(';')
    //           values.push(arr[1])
    //         } else if (temp == "pm25") {
    //           values.push(weatherData[temp])
    //         } else {
    //           values.push(res.data[temp])
    //         }
    //       }
    //       console.log(values)
    //       prcp=res.data.prcp,
    //       prcp24h=res.data.prcp24h,
    //       humidity=res.data.humidity,
    //       that.setData({
    //         values: values,
    //         uptime: res.data.uptime,
    //         date: res.data.today,
    //         weatherData: weatherData
    //         // prcp:res.data.prcp,
    //         // prcp24h: res.data.prcp24h,
    //         // humidity:res.data.humidity
    //       })

    //     }
    //   })
    // }
    // BMap.weather({
    //   fail: fail,
    //   success: success
    // });
    var values=[]
    for (var temp of this.data.factorNames) {
      if (!app.apiData[temp]) {
        values.push("N/A")
      } else if (temp == "wdspd") {
        var arr = app.apiData[temp].split(';')
        values.push(arr[1])
      } else if (temp == "pm25") {
        values.push(app.baiduData[temp])
      } else {
        values.push(app.apiData[temp])
      }
    }
    this.setData({
      values: values,
      uptime: app.apiData.uptime,
      date: app.apiData.today,
      weatherData: app.baiduData
    })
  }
})
function getGaugeOption() {
  return {
    title: {
      text: '泥石流危险度',
      left: '40%',
      top: '10%',
      textStyle: {
        color: '#e3e4e5',
        fontSize: 15
      }
    },
    backgroundColor: "#333333",
    series: [{
      type: 'gauge',
      center: ['50%', '60%'],
      radius: '80%',
      detail: {
        formatter: '{value}%'
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: [[0.2, '#21ba71'], [0.4, '#3066ff'], [0.6, '#ffff00'], [0.8, '#ff9a00'], [1, '#da2924']],
          width: 3,
          shadowColor: '#fff', //默认透明
          shadowBlur: 10
        }
      },
      pointer: {
        width: 2
      },
      data: [{
        value: 9
      }]

    }]
  };
}
function getWaterOption() {
  var val = parseInt(app.apiData.prcp/250)
  return {
    title: {
      text: '降雨量：' + app.apiData.prcp + '毫米',
      left: '50%',
      top: '50%',
      textStyle: {
        color: '#e3e4e5',
        fontSize: 12
      }
    },
    backgroundColor: "#333333",
    series: [{
      type: 'gauge',
      center: ['20%', '70%'],
      radius: '60%',
      detail: {
        formatter: '{value}%'
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: [[val/100, '#416eec'], [1, '#ffffff']],
          width: 3,
          shadowColor: '#fff', //默认透明
          shadowBlur: 0
        }
      },
      axisLabel: {            // 坐标轴小标记
        show: false
      },
      axisTick: {            // 坐标轴小标记
        show: false
      },
      splitLine: {           // 分隔线
        show: false
      },
      pointer: {
        show: false
      },
      data: [{
        value: val
      }]

    }]
  };
}
function getSoilOption() {
  var temp = app.apiData.humidity
  var val=temp.substr(0,temp.length-1)
  return {
    title: {
      text: '空气湿度：'+app.apiData.humidity,
      left: '50%',
      top: '50%',
      textStyle: {
        color: '#e3e4e5',
        fontSize: 12
      }
    },
    backgroundColor: "#333333",
    series: [{
      type: 'gauge',
      center: ['20%', '70%'],
      radius: '60%',
      detail: {
        formatter: '{value}%'
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: [[val/100, '#416eec'], [1, '#ffffff']],
          width: 3,
          shadowColor: '#fff', //默认透明
          shadowBlur: 0
        }
      },
      axisLabel: {            // 坐标轴小标记
        show: false
      },
      axisTick: {            // 坐标轴小标记
        show: false
      },
      splitLine: {           // 分隔线
        show: false
      },
      pointer: {
        show: false
      },
      data: [{
        value: val
      }]

    }]
  };
}

