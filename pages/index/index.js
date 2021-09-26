// index.js
// 获取应用实例
var rand = "";

Page({
  generate:function(e) {
    rand = "";
    for (var i = 0; i < 7; i++) {
      var r = parseInt((Math.random() * 10)) * 1;
      rand += r;
    }
    console.log(rand);
    this.setData({
      num:rand
    })
  }
})