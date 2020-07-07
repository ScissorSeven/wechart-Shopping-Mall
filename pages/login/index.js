Page({
  handleGetUserInfo(e){
    const {userInfo}=e.detail;
    //保存用户信息到缓存数据中
    wx.setStorageSync("userinfo", userInfo);
    wx.navigateBack({
      delta: 1
    });
      
  }
})