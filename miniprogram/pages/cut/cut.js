//获取应用实例
const app = getApp()
Page({
  data: {
    src: '',
    width: 250,//宽度
    height: 250,//高度
    max_width: 400,
    max_height: 400,
    disable_rotate: true,//是否禁用旋转
    disable_ratio: true,//锁定比例
    limit_move: true,//是否限制移动
  },
  onLoad: function (options) {
     this.cropper = this.selectComponent("#image-cropper");
    //开始裁剪
     this.setData({
       src: options.src,
    });
  },
  cropperload(e) {
    console.log('cropper加载完成');
  },
  loadimage(e) {
    
    console.log('图片');
    this.cropper.imgReset();
  },
  clickcut(e) {
    console.log(e.detail);
    //图片预览
    wx.previewImage({
      current: e.detail.url, // 当前显示图片的http链接
      urls: [e.detail.url] // 需要预览的图片http链接列表
    })
  },
  setWidth(e) {
    this.setData({
      width: e.detail.value < 10 ? 10 : e.detail.value
    });
    this.setData({
      cut_left: this.cropper.data.cut_left
    });
  },
  setHeight(e) {
    this.setData({
      height: e.detail.value < 10 ? 10 : e.detail.value
    });
    this.setData({
      cut_top: this.cropper.data.cut_top
    });
  },
  setCutTop(e) {
    this.setData({
      cut_top: e.detail.value
    });
    this.setData({
      cut_top: this.cropper.data.cut_top
    });
  },
  setCutLeft(e) {
    this.setData({
      cut_left: e.detail.value
    });
    this.setData({
      cut_left: this.cropper.data.cut_left
    });
  },
  switchChangeDisableHeight(e) {
    this.setData({
      disable_height: e.detail.value
    });
  },
  submit() {
    this.cropper.getImg((obj) => {
      console.log(obj.url);
      app.globalData.globalurl=obj.url;
      app.globalData.shifouhuancun=1;
      wx.redirectTo({
        url: '../index/index',
      })
     
    });
  },
  rotate() {
    //在用户旋转的基础上旋转90°
    this.cropper.setAngle(this.cropper.data.angle += 90);
  },
  end(e) {
    clearInterval(this.data[e.currentTarget.dataset.type]);
  },
  reset(){
    this.cropper.imgReset();
  },
  cancel(){
      wx.navigateBack({
        delta: -1
      })
  }
})