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
      url: 'https://api.douban.com/v2/movie/us_box',
      success:function(event){
        console.log(event)
      }
    });

    wx.request({
      url: 'https://api.douban.com/v2/movie/top250',
      success: function (event) {
        console.log(event)
      }
    })
  },

  
})