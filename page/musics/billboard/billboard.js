var toplistApi = require('../../../util/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topListInfo:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    toplistApi.getToplist(function (data) {
      
      for (let idx in data){
        var tempInfo = {};        
        tempInfo.id = data[idx].id;
        tempInfo.listenCount = data[idx].listenCount;
        tempInfo.picUrl = data[idx].picUrl;
        var cuttedName = [];
        for (let i in data[idx].songList){
          cuttedName[i] = data[idx].songList[i].songname + ' - ' + data[idx].songList[i].singername;

          // if (cuttedName[i].length > 16){
          //   cuttedName[i] = cuttedName[i].substring(0,16)+'..';
          // }
          console.log(cuttedName[i]);
        }
        tempInfo.songList = cuttedName;
        tempInfo.topTitle = data[idx].topTitle
        var tempInfoList = that.data.topListInfo;
        tempInfoList.push(tempInfo);

        that.setData({
          topListInfo: tempInfoList
        })
        
      }
        
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
  onUnload: function () {
  
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
  
  },

  onbillboard:function(){
    wx.navigateTo({
      url: '../billboardofcategory/billboardofcategory',
    })
  }
})