//Page Object
Page({
  data: {
    swiperList: [],
    catesList:[],
    floorList:[]
  },
  //options(Object)
  onLoad: function(options) {
    //获取轮播图数据
    wx.request({
      url: 'http://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        this.setData({
          swiperList: result.data.message
          })
      },
      fail: () => {},
      complete: () => {}
    });
    //获取导航栏数据
    wx.request({
      url: 'http://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        this.setData({
          catesList: result.data.message
          })
      },
      fail: () => {},
      complete: () => {}
    });  
    
    wx.request({
      url: 'http://api-hmugo-web.itheima.net/api/public/v1/home/floordata',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        this.setData({
          floorList: result.data.message
          })
      },
      fail: () => {},
      complete: () => {}
    }); 
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  
