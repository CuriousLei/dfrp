import * as echarts from '../../../lib/ec-canvas/echarts';
//import * as echarts from '../../../lib/echarts.js';
var bmap = require('../../../lib/bmap-wx.min.js');
Page({
  data: {
    ecBar: {
      onInit: function (canvas, width, height) {
        const gaugeChart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(gaugeChart);
        gaugeChart.setOption(getGaugeOption());
        console.log(gaugeChart)
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
    }
  },
  onLoad: function () {
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: 'XIoALMsGHABXrGSCT46ak5jKacZ7fQfo'
    });
    var fail = function (data) {
      console.log('fail!!!!')
    };
    var success = function (data) {
      console.log('success!!!');
      var weatherData = data.currentWeather[0];
      weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind + '\n';
      that.setData({
        weatherData: weatherData
      });
    }
    BMap.weather({
      fail: fail,
      success: success
    });
  },
  onReady() {
    var that = this;
    wx.request({
      url: 'https://api.map.baidu.com/telematics/v3/weather?location=西安市&output=json&ak=申请的ak',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.results);
        
      }
    })
  }
});
function getGaugeOption() {
  return {
    title: {
      text: '泥石流危险度',
      left:'35%',
      top:'10%',
      textStyle:{
        color:'#e3e4e5',
        fontSize:15
      }
    },
    backgroundColor: "#333333",
    series: [{
      type: 'gauge',
      center: ['50%', '60%'],
      radius:'70%',
      detail: {
        formatter: '{value}%'
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: [[0.2, '#21ba71'],[0.4, '#3066ff'], [0.6, '#ffff00'], [0.8, '#ff9a00'], [1, '#da2924']],
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

function getBarOption() {
  return {
    color: ['#37a2da', '#32c5e9', '#67e0e3'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['热度', '正面', '负面']
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }
    ],
    series: [
      {
        name: '热度',
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: [300, 270, 340, 344, 300, 320, 310]
      },
      {
        name: '正面',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true
          }
        },
        data: [120, 102, 141, 174, 190, 250, 220]
      },
      {
        name: '负面',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'left'
          }
        },
        data: [-20, -32, -21, -34, -90, -130, -110]
      }
    ]
  };
}

function getWaterOption() {
  return {
    title: {
      text: '降雨量：10.0毫米',
      left: '50%',
      top: '50%',
      textStyle: {
        color: '#e3e4e5',
        fontSize:12
      }
    },
    backgroundColor: "#333333",
    series: [{
      type: 'gauge',
      center: ['20%', '70%'],
      radius: '70%',
      detail: {
        formatter: '{value}%'
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: [[0.04, '#416eec'], [1, '#ffffff']],
          width: 3,
          shadowColor: '#fff', //默认透明
          shadowBlur: 0
        }
      },
      axisLabel: {            // 坐标轴小标记
        show :false
      },
      axisTick: {            // 坐标轴小标记
        show:false
      },
      splitLine: {           // 分隔线
        show:false
      },
      pointer: {
        show: false
      },
      data: [{
        value: 4
      }]

    }]
  };
}
function getSoilOption() {
  return {
    title: {
      text: '土壤湿度',
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
      radius: '70%',
      detail: {
        formatter: '{value}%'
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: [[0.78, '#416eec'], [1, '#ffffff']],
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
        value: 78
      }]

    }]
  };
}
