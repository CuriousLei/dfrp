// miniprogram/pages/ordPeople/article/article.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headline:"",
    intro:"",
    titleImg:"",
    textTitle:[],
    segment:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    const _ = db.command
    var id = options.ltid
    var head=app.globalData.title[id]
    console.log(head.textTitle)
   
    db.collection('segmentdb')
      .limit(10) // 限制返回数量为 10 条
      .where({
        id: _.in(head.textTitle)
      })
      .get()
      .then(res=>{
        console.log(res)
        // var segList = res.data[1][app.articalControl.seg]
        // console.log(segList)
        // var segShowList=[]
        // for (var i of head.textTitle){
        //   if (segList[i-1]){
        //     segShowList.push(segList[i-1])
        //   }
          
        // }
        // this.setData({
        //   segment: segShowList
        // })
        for (var item of res.data){
        
          if(item.type=="str"){
            item.type=0
          } else if (item.type == "arr"){
            item.type =1
          }else{
            item.type = 2
            var LT = [{ 'imgurl': item.content}]
            wx.cloud.callFunction({
              name: 'getLoreTitleImg',
              data: { loreTitle: LT },
              success: res => {
                
                item.content=res.result[0].tempFileURL
              }
            })

          }
        }
        console.log(res.data)
        this.setData({
          segment: res.data
        })
      })


    this.setData({
      headline: head.name,
      intro: head.intro,
      titleImg: app.globalData.img[id].tempFileURL
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
  onUnload: function (param) {
    this.setData({
      segment: []
    })
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