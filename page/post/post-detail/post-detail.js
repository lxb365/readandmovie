var postdata = require('../../../data/localdatabase.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ifCollected: false,
    ifMusicStarted: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      postDetail: postdata.postList[options.id],
      ifCollected: wx.getStorageSync('key' + options.id),
      
    })
    console.log(getApp().globalData.g_PlayingMusicId);
    console.log(options.id);
    if (getApp().globalData.g_PlayingMusicId == options.id){
      this.setData({
        ifMusicStarted: getApp().globalData.g_ifPlayingMusic
      })
      
      console.log('yes');
    }
    else{
      this.setData({
        ifMusicStarted: false
      })
      
      console.log('no');
    }
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

  onModalFun: function (event) {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onCollectBlog: function () {
    var that = this;
    wx.showModal({
      title: '提示',
      content: that.data.ifCollected ? '是否取消收藏该文章' : '是否收藏该文章',
      success: function (res) {
        if (res.confirm) {
          that.setData({
            ifCollected: !that.data.ifCollected
          });

          wx.showToast({
            title: that.data.ifCollected ? '收藏成功' : '取消收藏',
            icon: 'success',
            duration: 1000
          });
          wx.setStorageSync('key' + that.data.postDetail.postId, that.data.ifCollected)
        }
      }
    })


  },

  onShareBlog: function () {
    wx.showActionSheet({
      itemList: ['分享到朋友圈', '分享到微博', '分享到QQ'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  onMusicStart: function () {
    if (this.data.ifMusicStarted){
      wx.pauseBackgroundAudio();
      this.setData({
        ifMusicStarted: false
      })
      getApp().globalData.g_ifPlayingMusic = false;
    }    
    else{
      wx.playBackgroundAudio({
        dataUrl: this.data.postDetail.music.url,
        title: this.data.postDetail.music.title,
        coverImgUrl: this.data.postDetail.music.coverImg
      })
  
      this.setData({
        ifMusicStarted:true
      })

      getApp().globalData.g_ifPlayingMusic = true;
      getApp().globalData.g_PlayingMusicId = this.data.postDetail.postId;

    }
  }
})