// components/Searchinput/Searchinput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    search(e) {
      wx.navigateTo({
        url: "../../pages/search/index",
        success: function (res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit("search_value", { data: e.detail["value"] });
          // console.log(e)
        },
      });
    },
  },
});
