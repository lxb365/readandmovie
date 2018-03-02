Page({

  /**
   * 页面的初始数据
   */
  data: {
    urlpath: [
      'http://t.yushu.im/v2/movie/in_theaters',
      'http://t.yushu.im/v2/movie/coming_soon',
      'http://t.yushu.im/v2/movie/top250'
    ],
    movieData: [
      {
        catogray:null,
        movieList:[{},{},{}]
      },
      {
        catogray: null,
        movieList: [{}, {}, {}]
      },
      {
        catogray: null,
        movieList: [{}, {}, {}]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var urlPath = this.data.urlpath;
    for (let idx in urlPath) {
      wx.request({
        url: urlPath[idx] + "?start=0&count=3",
        success: function (event) {      
          that.saveData(event.data.subjects, event.data.total);
        }
      });
    }
  },

  saveData: function (subjects,total) {
    var tempMovieData = [{},{},{}];   

    for(let i = 0;i < 3; i++){
      var tempTitle = subjects[i].title;
      if (tempTitle.length > 6)
      {
        tempTitle = tempTitle.substring(0,6)+"...";
      }
      tempMovieData[i] = {
        title: tempTitle,
        images: subjects[i].images.large,
        rating: subjects[i].rating.average,
        stars: subjects[i].rating.stars
      }
    }
    var tempMovieList = this.data.movieData;
    switch(total){
      case 250:
        tempMovieList[2].catogray = "Top250"
        tempMovieList[2].movieList = tempMovieData;
        break;
      case 23:
        tempMovieList[0].catogray = "正在热映"
        tempMovieList[0].movieList = tempMovieData;
        break;
      case 26:
        tempMovieList[1].catogray = "即将上映"
        tempMovieList[1].movieList = tempMovieData;
        break;
    }
    console.log(tempMovieList);
    
    this.setData({
      movieData: tempMovieList
    })
    console.log(this.data.movieData);
  }
})