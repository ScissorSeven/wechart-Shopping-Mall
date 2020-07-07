import { request } from "../../requert/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime";
Page({
  data: {
    goods: [],
    // 取消 按钮 是否显示
    isFocus: false,
    // 输入框的值
    inpValue: "",
  },
  onLoad: function(option){
    //获取事件对象
    const eventChannel = this.getOpenerEventChannel()
    // 监听aishang事件，获取上一页面通过eventChannel传送到当前页面的数据
    let inpValue="";
    eventChannel.on("search_value", function (data) {
      // console.log("传递的参数", data);
      inpValue=data.data;
    });
    this.setData({
      inpValue,
      isFocus: true
    });
    this.qsearch(inpValue);
  },
  TimeId: -1,
  // 输入框的值改变 就会触发的事件
  handleInput(e) {
    // 1 获取输入框的值
    const { value } = e.detail;
    // 2 检测合法性
    if (!value.trim()) {
      this.setData({
        goods: [],
        isFocus: false,
      });
      // 值不合法
      return;
    }
    // 3 准备发送请求获取数据
    this.setData({
      isFocus: true,
    });
    clearTimeout(this.TimeId);
    this.TimeId = setTimeout(() => {
      this.qsearch(value);
    }, 1000);
  },
  // 发送请求获取搜索建议 数据
  async qsearch(query) {
    const res = await request({ url: "/goods/qsearch", data: { query } });
    console.log(res);
    this.setData({
      goods: res,
    });
  },
  // 点击 取消按钮
  handleCancel() {
    this.setData({
      inpValue: "",
      isFocus: false,
      goods: [],
    });
  },
});
