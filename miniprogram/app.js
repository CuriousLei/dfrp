//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData= { img:null,
    title:null}
    
    this.resourceTab = { tabs: ['募捐通道'], tabIndex: [5], activeIndex:5}
    this.articalControl= {db:"loredb",title:"loreTitle",seg:"loreSegment"}
    this.user ="people"
    this.identity="普通群众"
    this.situation="备灾"
    // var that = this;   // 这个地方非常重要，重置data{}里数据时候setData方法的this应为以及函数的this, 如果在下方的sucess直接写this就变成了wx.request()的this了
    // wx.request({
    //   url: 'http://debrisflow.cn/getState.php',//请求地址
    //   data: {//发送给后台的数据
    //     name: "bella",
    //     age: 20
    //   },
    //   header: {//请求头
    //     "Content-Type": "applciation/json"
    //   },
    //   method: "GET",//get为默认方法/POST
    //   success: function (res) {
    //     console.log(res.data);//res.data相当于ajax里面的data,为后台返回的数据
    //     // that.setData({//如果在sucess直接写this就变成了wx.request()的this了.必须为getdata函数的this,不然无法重置调用函数
    //     //   　logs: res.data.result
    //     // })

    //   },
    //   fail: function (err) { },//请求失败
    //   complete: function () { }//请求完成后执行的函数
    // })
    this.idenList=['普通群众','业务部门','保险市场','社会力量']
    this.stateList=['备灾','临灾','救灾']
    this.openid=""
    this.session_key=""
    this.latitude=""
    this.longitude=""
    this.btnIdList = [4]
    this.artIdList=[1,2,3]
    this.baiduData={}//百度天气api
    this.apiData = {}//http://api.help.bj.cn的天气数据
    this.loginCode=""
  },

})
