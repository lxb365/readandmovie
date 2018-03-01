Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/in_theaters',
      success:function(event){
        console.log(event)
      }
    });

    wx.request({
      url: 'http://t.yushu.im/v2/movie/coming_soon',
      success: function (event) {
        console.log(event)
      }
    });

    wx.request({
      url: 'http://t.yushu.im/v2/movie/top250',
      success: function (event) {
        console.log(event)
      }
    })
  },

  
})