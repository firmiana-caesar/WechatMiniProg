//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    picturePath: null
  },

  bindViewTap: function(){
    /*wx.navigateTo({
      url: '../index/index'
    })*/
    wx.navigateBack({

    })
  },

  TapTakePicture: function(){var _this = this
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        //picturePath = res.tempFilePaths
        _this.setData({
          picturePath:res.tempFilePaths
        })
      },
    })

  },

  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }

})
