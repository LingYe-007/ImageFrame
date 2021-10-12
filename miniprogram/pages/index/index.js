//index.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //用户个人信息
    userInfo: {
      cw: 300,
      ch: 200,
      uploadpic: "",
      canIUse: wx.canIUse("button.open-type.getUserInfo"),
      xianshi1: false,
      xianshi2: false,
      xianshi3: false,
      hechenghouxianshi: true,
      scuecimage: "",
      buttonjinyong: true,
    },
    list: [],
    //民大70周年限定
    list1: [
      {
        id: -14,
        Path: "https://ks3-cn-beijing.ksyuncs.com/lingye-space/asset/pic14.png",
      },
      {
        id: -13,
        Path: "https://ks3-cn-beijing.ksyuncs.com/lingye-space/asset/pic14.png",
      },
      {
        id: -12,
        Path: "https://ks3-cn-beijing.ksyuncs.com/lingye-space/asset/pic13.png",
      },
      {
        id: -11,
        Path: "https://ks3-cn-beijing.ksyuncs.com/lingye-space/asset/pic11.png",
      },
      {
        id: -10,
        Path:
          "https://ks3-cn-beijing.ksyuncs.com/lingye-space/asset/picTen.png",
      },
      {
        id: -9,
        Path:
          "https://ks3-cn-beijing.ksyuncs.com/lingye-space/asset/picNine.png",
      },
      {
        id: -8,
        Path:
          "https://ks3-cn-beijing.ksyuncs.com/lingye-space/asset/picSix.png",
      },
      {
        id: -7,
        Path:
          "https://ks3-cn-beijing.ksyuncs.com/lingye-space/asset/picFive.png",
      },
      {
        id: -6,
        Path:
          "https://ks3-cn-beijing.ksyuncs.com/lingye-space/asset/picFour.png",
      },
      {
        id: -5,
        Path:
          "https://ks3-cn-beijing.ksyuncs.com/lingye-space/asset/picThree.png",
      },
      {
        id: -4,
        Path:
          "https://ks3-cn-beijing.ksyuncs.com/lingye-space/asset/picTwo.png",
      },
      {
        id: -3,
        Path:
          "https://ks3-cn-beijing.ksyuncs.com/lingye-space/asset/picOne.png",
      },
      {
        id: -2,
        Path:
          "https://ks3-cn-beijing.ksyuncs.com/lingye-space/70%E5%91%A8%E5%B9%B4%E5%A4%B4%E5%83%8F/%E5%A4%B4%E5%83%8F%EF%BC%88%E8%A1%A5%E5%85%85%EF%BC%89/%E5%A4%B4%E5%83%8F1.png",
      },
      {
        id: -1,
        Path:
          "https://ks3-cn-beijing.ksyuncs.com/lingye-space/70%E5%91%A8%E5%B9%B4%E5%A4%B4%E5%83%8F/%E5%A4%B4%E5%83%8F%EF%BC%88%E8%A1%A5%E5%85%85%EF%BC%89/%E5%A4%B4%E5%83%8F2.png",
      },
      {
        id: 0,
        Path:
          "https://ks3-cn-beijing.ksyuncs.com/lingye-space/70%E5%91%A8%E5%B9%B4%E5%A4%B4%E5%83%8F/%E5%A4%B4%E5%83%8F%EF%BC%88%E8%A1%A5%E5%85%85%EF%BC%89/%E5%A4%B4%E5%83%8F3.png",
      },
      {
        id: 1,
        Path:
          "https://img.alicdn.com/imgextra/i4/1745297824/O1CN01J4cmEt27fRSEACMTI_!!1745297824.png",
      },
      {
        id: 2,
        Path:
          "https://img.alicdn.com/imgextra/i4/1745297824/O1CN01ACTFb927fRS04zSwi_!!1745297824.png",
      },
      {
        id: 3,
        Path:
          "https://img.alicdn.com/imgextra/i3/1745297824/O1CN011fGi3v27fRSBO79Sk_!!1745297824.png",
      },
      {
        id: 4,
        Path:
          "https://img.alicdn.com/imgextra/i3/1745297824/O1CN010pUvsz27fRS5uMIEk_!!1745297824.png",
      },
      {
        id: 5,
        Path:
          "https://img.alicdn.com/imgextra/i4/1745297824/O1CN012XPVbs27fRSDn9o1B_!!1745297824.png",
      },
      {
        id: 6,
        Path:
          "https://img.alicdn.com/imgextra/i3/1745297824/O1CN01d1ZqA227fRSDn9GlJ_!!1745297824.png",
      },
      {
        id: 7,
        Path:
          "https://img.alicdn.com/imgextra/i4/1745297824/O1CN01naWvXt27fRS0518tt_!!1745297824.png",
      },
      {
        id: 8,
        Path:
          "https://img.alicdn.com/imgextra/i1/1745297824/O1CN01VZRjnM27fRSCudNwD_!!1745297824.png",
      },
      {
        id: 9,
        Path:
          "https://img.alicdn.com/imgextra/i4/1745297824/O1CN01WWaCZM27fRSALrrJa_!!1745297824.png",
      },
      {
        id: 10,
        Path:
          "https://img.alicdn.com/imgextra/i2/1745297824/O1CN018kdLdL27fRS93yCnl_!!1745297824.png",
      },
      {
        id: 11,
        Path:
          "https://img.alicdn.com/imgextra/i3/1745297824/O1CN01bjFytF27fRS86YjbK_!!1745297824.png",
      },
      {
        id: 12,
        Path:
          "https://img.alicdn.com/imgextra/i4/1745297824/O1CN01viOYLu27fRS86XnOH_!!1745297824.png",
      },
      {
        id: 13,
        Path:
          "https://img.alicdn.com/imgextra/i4/1745297824/O1CN01Ivdjwg27fRS4lD1hu_!!1745297824.png",
      },
      {
        id: 14,
        Path:
          "https://img.alicdn.com/imgextra/i4/1745297824/O1CN016qEaIQ27fRS6MCvZB_!!1745297824.png",
      },
      {
        id: 15,
        Path: "https://ks3-cn-beijing.ksyuncs.com/lingye-space/cel-Geek.png",
      },
      {
        id: 16,
        Path: "https://ks3-cn-beijing.ksyuncs.com/lingye-space/cel-GeekTwo.png",
      },
      {
        id: 17,
        Path:
          "https://ks3-cn-beijing.ksyuncs.com/lingye-space/cel-NewThread.png",
      },
      {
        id: 18,
        Path: "https://ks3-cn-beijing.ksyuncs.com/lingye-space/cel-Scuec.png",
      },
      {
        id: 19,
        Path:
          "https://ks3-cn-beijing.ksyuncs.com/lingye-space/cel-ScuecTwo.png",
      },
    ],
    //民大建筑
    list2: [
      {
        id: 12,
        Path:
          "https://img.alicdn.com/imgextra/i4/1745297824/O1CN01lBbVu427fRSB3Mmhp_!!1745297824.png",
      },
      {
        id: 12,
        Path:
          "https://img.alicdn.com/imgextra/i2/1745297824/O1CN01RVKI5b27fRSDnHvXS_!!1745297824.png",
      },
      {
        id: 12,
        Path:
          "https://img.alicdn.com/imgextra/i3/1745297824/O1CN01uJM2os27fRSAM07Ig_!!1745297824.png",
      },
      {
        id: 12,
        Path:
          "https://img.alicdn.com/imgextra/i4/1745297824/O1CN01mTZya927fRS5uQewT_!!1745297824.png",
      },
    ],
    //民大生活
    list3: [
      {
        id: 0,
        Path:
          "https://img.alicdn.com/imgextra/i4/1745297824/O1CN01qWT6Oo27fRSLOkP0u_!!1745297824.png",
      },
      {
        id: 23,
        Path:
          "https://img.alicdn.com/imgextra/i4/1745297824/O1CN01n5hARd27fRS8UQzJp_!!1745297824.png",
      },
      {
        id: 1,
        Path:
          "https://img.alicdn.com/imgextra/i4/1745297824/O1CN019gzQfK27fRS4lXAIw_!!1745297824.png",
      },
      {
        id: 2,
        Path:
          "https://img.alicdn.com/imgextra/i2/1745297824/O1CN01rHImEk27fRS5udDIB_!!1745297824.png",
      },
      {
        id: 3,
        Path:
          "https://img.alicdn.com/imgextra/i2/1745297824/O1CN01cPnIkE27fRS8UYZSQ_!!1745297824.png",
      },
      {
        id: 4,
        Path:
          "https://img.alicdn.com/imgextra/i3/1745297824/O1CN01noq28W27fRS9Fs9NV_!!1745297824.png",
      },
      {
        id: 5,
        Path:
          "https://img.alicdn.com/imgextra/i1/1745297824/O1CN01Qd0rBZ27fRSCHH78p_!!1745297824.png",
      },
      {
        id: 6,
        Path:
          "https://img.alicdn.com/imgextra/i2/1745297824/O1CN01WzCjDx27fRS6MSq3b_!!1745297824.png",
      },
      {
        id: 7,
        Path:
          "https://img.alicdn.com/imgextra/i4/1745297824/O1CN013KsTDc27fRS8NSV3A_!!1745297824.png",
      },
      {
        id: 8,
        Path:
          "https://img.alicdn.com/imgextra/i1/1745297824/O1CN011OGbVe27fRS8NSdM6_!!1745297824.png",
      },
      {
        id: 9,
        Path:
          "https://img.alicdn.com/imgextra/i1/1745297824/O1CN01f45emA27fRS86nqGF_!!1745297824.png",
      },
      {
        id: 10,
        Path:
          "https://img.alicdn.com/imgextra/i2/1745297824/O1CN01ph967E27fRS6MSq7G_!!1745297824.png",
      },
      {
        id: 11,
        Path:
          "https://img.alicdn.com/imgextra/i1/1745297824/O1CN01CrcZa627fRS5ubfOq_!!1745297824.png",
      },
      {
        id: 12,
        Path:
          "https://img.alicdn.com/imgextra/i2/1745297824/O1CN01DujV8j27fRSDnOAmu_!!1745297824.png",
      },
      {
        id: 13,
        Path:
          "https://img.alicdn.com/imgextra/i1/1745297824/O1CN01GKBQXU27fRSAMBWjE_!!1745297824.png",
      },
      {
        id: 14,
        Path:
          "https://img.alicdn.com/imgextra/i3/1745297824/O1CN01DMRCv727fRSB3Vul4_!!1745297824.png",
      },
      {
        id: 15,
        Path:
          "https://img.alicdn.com/imgextra/i3/1745297824/O1CN01L1T8pU27fRS94Er7j_!!1745297824.png",
      },
      {
        id: 16,
        Path:
          "https://img.alicdn.com/imgextra/i4/1745297824/O1CN01ZQvZxM27fRS9FqsKc_!!1745297824.png",
      },
      {
        id: 17,
        Path:
          "https://img.alicdn.com/imgextra/i3/1745297824/O1CN01k1bHPD27fRS94EWJp_!!1745297824.png",
      },
      {
        id: 18,
        Path:
          "https://img.alicdn.com/imgextra/i2/1745297824/O1CN01xR7Ihd27fRSCHEpfU_!!1745297824.png",
      },
      {
        id: 19,
        Path:
          "https://img.alicdn.com/imgextra/i3/1745297824/O1CN01PWEJRh27fRSB3TZBY_!!1745297824.png",
      },
      {
        id: 20,
        Path:
          "https://img.alicdn.com/imgextra/i2/1745297824/O1CN01jIjadd27fRSBOPD8O_!!1745297824.png",
      },
      {
        id: 22,
        Path:
          "https://img.alicdn.com/imgextra/i3/1745297824/O1CN017sAFis27fRS6MTmFj_!!1745297824.png",
      },
    ],
  },

  /**
   * 用户点击右上角分享
   */

  getUserImg: function (e) {
    var that = this;
    wx.showLoading({
      title: "获取中",
    });

    setTimeout(function () {
      wx.hideLoading();
    }, 100);
  },

  f2: function (event) {
    let that = this;

    wx.chooseImage({
      count: 1,
      sizeType: ["compressed"],
      sourceType: ["album", "camera"],
      success(res) {
        console.log("上传成功");
        wx.showLoading({
          title: "云端AI审查图片中",
          mask: true,
        });

        var tempFile = res.tempFilePaths[0];
        console.log(res.tempFiles[0].size);

        /* wx.getImageInfo ({
        src: res.tempFilePaths[0],
        success (res) {
            // console.log ('获得原始图片大小',res.width)
            //console.log (res.height)
           var originWidth, originHeight;
            originHeight = res.height;
            originWidth = res.width;
            console.log (originWidth);
            // 压缩比例
            // 最大尺寸限制
            var maxWidth = 1200,
                maxHeight = 600;
            // 目标尺寸
            var targetWidth = originWidth,
                targetHeight = originHeight;
            // 等比例压缩，如果宽度大于高度，则宽度优先，否则高度优先
            if (originWidth > maxWidth || originHeight > maxHeight) {
                if (originWidth / originHeight > maxWidth / maxHeight) {
                    // 要求宽度*(原生图片比例)=新图片尺寸
                    targetWidth = maxWidth;
                    targetHeight = Math.round (maxWidth * (originHeight / originWidth));
                } else {
                    targetHeight = maxHeight;
                    targetWidth = Math.round (maxHeight * (originWidth / originHeight));
                }
            }

            // 更新 canvas 大小
            that.setData ({
                cw: targetWidth,
                ch: targetHeight
            });

             // 尝试压缩文件，创建 canvas
            var ctx = wx.createCanvasContext ('firstCanvas');
            ctx.clearRect (0, 0, targetWidth, targetHeight);
            ctx.drawImage (tempFile, 0, 0, targetWidth, targetHeight);
            ctx.draw (false,function (){
               // 获得新图片输出
    wx.canvasToTempFilePath ({
      canvasId: 'firstCanvas',
      success: (res) => {  */
        // 写入图片数组
        console.log("1");
        wx.compressImage({
          src: tempFile,
          quality: 0.01,
          success: function (res) {
            console.log(res.tempFilePath);
            wx.cloud.uploadFile({
              cloudPath:
                "img/" +
                new Date().getTime() +
                "-" +
                Math.floor(Math.random() * 1000),
              filePath: res.tempFilePath,
              success: (res) => {
                console.log(res);
                wx.cloud.callFunction({
                  name: "imgCheck",
                  data: { event: res.fileID },
                  success: (res) => {
                    console.log(res);
                    if (res.result.errCode == 87014) {
                      wx.hideLoading();
                      wx.showModal({
                        title:
                          "您上传的图片存在违法违规信息，未通过云端AI审核！",
                        showCancel: false,
                      });
                    }  else {
                      wx.hideLoading();
                      wx.navigateTo({
                        url: "/pages/cut/cut?src=" + tempFile,
                      });
                    }
                  },
                });
              },
              fail: (err) => {
                console.log(err);
                wx.hideLoading();
                wx.showModal({
                  title: "提示",
                  content: "您上传的图片云端审核失败！",
                  showCancel: false,
                  success(res) {
                    if (res.confirm) {
                      console.log("用户点击确定");
                    } else if (res.cancel) {
                      console.log("用户点击取消");
                    }
                  },
                });
              },
            });
            //           wx.getFileSystemManager().readFile({
            //             filePath: res.tempFilePath,
            //             encoding: "base64",
            //             success: (buffer) => {
            //               console.log("2");
            //               wx.cloud.callFunction({
            //                 name: "imgCheck",
            //                 data: {
            //                   event: buffer,
            //                   // contentType: 'image/' + res
            //                 },
            //                 success: (res) => {
            //                   console.log(res);
            //                   if (
            //                     res.result.errMsg !== "openapi.security.imgSecCheck:ok" ||
            //                     res.result.errCode !== 0
            //                   ) {
            //                     wx.hideLoading();
            //                     wx.showModal({
            //                       title:
            //                         "您上传的图片存在违法违规信息，未通过云端AI审核！",
            //                       showCancel: false,
            //                     });
            //                   } else if (res.result.errCode === 87014) {
            //                     wx.showToast({
            //                       title: "高危险内容请重新上传",
            //                       icon: "none",
            //                       duration: 4000,
            //                     });
            //                   } else {
            //                     wx.hideLoading();
            //                     wx.navigateTo({
            //                       url: "/pages/cut/cut?src=" + tempFile,
            //                     });
            //                   }
            //                 },
            //                 fail: (res) => {
            //                   if (res.errCode) {
            //                     wx.showToast({
            //                       title: "上传超时了，请压缩图片",
            //                       icon: "none",
            //                       duration: 4000,
            //                     });
            //                   }
            //                 },
            //               });
            //               // wx.serviceMarket.invokeService({
            //               //   service: '',//填写购买的珊瑚安全的appid
            //               //   api: 'imgSecCheck',
            //               //   data: {
            //               //     "Action": "ImageModeration",
            //               //     "Scenes": ["PORN", "POLITICS", "TERRORISM"],
            //               //     "ImageUrl": "",
            //               //     "ImageBase64": buffer.data,
            //               //     "Config": "",
            //               //     "Extra": ""
            //               //   },
            //               // }).then(res => {
            //               //   console.log(res.data)
            //               //  //var a= JSON.parse(res.data)
            //               //   //console.log(a)
            //               //   console.log(res.data["Response"]["PornResult"]["Suggestion"])

            //               //   if( res.data["Response"]["PornResult"]["Suggestion"] !== 'PASS' || res.data["Response"]["PoliticsResult"]["Suggestion"] !== 'PASS'||res.data["Response"]["TerrorismResult"]["Suggestion"]!== "PASS" ){
            //               //     wx.hideLoading()
            //               //     wx.showModal({
            //               //      title:"您上传的图片存在违法违规信息，未通过云端AI审核！",
            //               //      showCancel:false,
            //               //     });

            //               //   }
            //               //   else{
            //               //     wx.hideLoading()
            //               //     wx.navigateTo({

            //               //       url: '/pages/cut/cut?src='+tempFile,
            //               //     })
            //               //   }

            //               // }).catch((err)=>{
            //               //   console.log(err)
            //               //   wx.hideLoading()
            //               //   wx.showModal({
            //               //     title: '提示',
            //               //     content: '您上传的图片云端审核失败！',
            //               //     showCancel:false,
            //               //     success (res) {
            //               //       if (res.confirm) {
            //               //         console.log('用户点击确定')
            //               //       } else if (res.cancel) {
            //               //         console.log('用户点击取消')
            //               //       }
            //               //     }
            //               //   })
            //               // })

            //               /*.then(res => {
            //                 console.log(JSON.stringify(res))
            //                 wx.showModal({
            //                   title: 'cost',
            //                   content: (Date.now() - d) + ' ',
            //                 })
            //               })*/
            //               /*wx.cloud.callFunction({
            //                 name: 'msg',
            //                 data: {
            //                   value: buffer.data
            //                 }
            //               })*/
            //               /* wx.cloud.init({
            //             env:'mindatouxiang-5g56l8c62275aca1'
            //           })
            //           wx.cloud.callFunction({
            //             name: 'msg',
            //             data: {
            //               value: buffer.data
            //             }
            //           })
            //           .then(
            //             imgRes => {
            //                 console.log('图片检测码：'+imgRes.result.errCode)
            //               if (imgRes.result.errCode == '87014') {

            //                 wx.showToast({
            //                   title: '图片含有违法违规内容',
            //                   icon: 'none'
            //                 })
            //                 return
            //               } else {

            //   wx.navigateTo({

            //     url: '/pages/cut/cut?src='+tempFile,
            //   })
            // }
            //       that.setData ({
            //         'uploadpic': res.tempFilePath
            //       });
            //     }
            //   )*/
            //             },
            //             fail: (res) => {
            //               console.log("缓存失败");
            //             },
            //           }); //lalala
          },
        });
      },
    });

    /*if (res.tempFiles[0] && res.tempFiles[0].size > 1024 * 1024 ) {
         
          wx.navigateTo({
         
            url: '/pages/cut/cut?src='+tempFile,
          })
        
        }
        else{
       
        wx.showLoading({
          title: '上传并检测图片中...',
          mask: true
        });
    
            
            wx.getFileSystemManager().readFile({
              filePath:tempFile,
              success: buffer => {
                console.log(buffer.data)
                wx.cloud.callFunction({
                  name: 'msg',
                  data: {
                    value: buffer.data
                  }
                }).then(
                  imgRes => {
                      console.log(imgRes.result.errCode)
                    if (imgRes.result.errCode == '87014') {
                     
                      wx.showToast({
                        title: '图片含有违法违规内容',
                        icon: 'none'
                      })
                      return
                    } else {
                      

        wx.navigateTo({
         
          url: '/pages/cut/cut?src='+tempFile,
        })
      }
      fail: err => {
        console.log(err)
      }
    }
             )}
            })
         
          }*/
  },
  /*doImgSecCheck: function (ImageBase64) {
    var d = Date.now()
    wx.serviceMarket.invokeService({
      service: 'wxee446d7507c68b11',
      api: 'imgSecCheck',
      data: {
        "Action": "ImageModeration",
        "Scenes": ["PORN", "POLITICS", "TERRORISM"],
        "ImageUrl": "",
        "ImageBase64": ImageBase64,
        "Config": "",
        "Extra": ""
      },
    }).then(res => {
      console.log(JSON.stringify(res))
      wx.showModal({
        title: 'cost',
        content: (Date.now() - d) + ' ',
      })
    })
  },*/
  f3: function (event) {
    var that = this;
    //加个动画提高用户体验
    wx.showToast({
      icon: "loading",
      title: "正在保存图片",
      duration: 500,
    });
    //判断用户是否授权"保存到相册"
    wx.getSetting({
      success(res) {
        //没有权限，发起授权
        if (!res.authSetting["scope.writePhotosAlbum"]) {
          wx.authorize({
            scope: "scope.writePhotosAlbum",
            success() {
              //用户允许授权，保存图片到相册
              that.savePhoto();
            },
            fail() {
              //用户点击拒绝授权，跳转到设置页，引导用户授权
              wx.openSetting({
                success() {
                  wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success() {
                      that.savePhoto();
                    },
                  });
                },
              });
            },
          });
        } else {
          //用户已授权，保存到相册
          that.savePhoto();
        }
      },
    });
  },
  //下载图片地址并保存到相册，提示保存成功
  savePhoto: function (event) {
    var that = this;
    wx.saveImageToPhotosAlbum({
      filePath: that.data.userInfo.scuecimage,

      success(res) {
        wx.showModal({
          title: "保存成功",
          content: "头像已经保存到相册，一起更换头像，庆祝民大70周年校庆吧！",
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log("弹框后点取消");
            } else {
              console.log("弹框后点取消");
            }
          },
        });
      },
    });
    that.setData({
      "userInfo.buttonjinyong": true,
      // "userInfo.hechenghouxianshi": true,
    });
  },

  onLoad: function () {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo);
            },
          });
        }
      },
    });
    //开启转发
    wx.showShareMenu({
      withShareTicket: true,
      menus: ["shareAppMessage", "shareTimeline"],
    });
  },
  bindGetUserInfo(e) {
    wx.showLoading({
      title: "获取中",
    });

    setTimeout(function () {
      wx.hideLoading();
    }, 100);
    var aaa;
    var that = this;
    if (that.data.userInfo.hechenghouxianshi == false) {
      that.setData({
        "userInfo.hechenghouxianshi": true,
      });
    }
    var imageUrl = e.detail.userInfo.avatarUrl;
    imageUrl = imageUrl.split("/"); //把头像的路径切成数组

    //把大小数值为 46 || 64 || 96 || 132 的转换为0
    if (
      imageUrl[imageUrl.length - 1] &&
      (imageUrl[imageUrl.length - 1] == 46 ||
        imageUrl[imageUrl.length - 1] == 64 ||
        imageUrl[imageUrl.length - 1] == 96 ||
        imageUrl[imageUrl.length - 1] == 132)
    ) {
      imageUrl[imageUrl.length - 1] = 0;
    }

    imageUrl = imageUrl.join("/"); //重新拼接为字符串

    console.log("高清的头像", imageUrl);

    wx.downloadFile({
      url: imageUrl,
      success(res) {
        aaa = res.tempFilePath;
        that.setData({
          "userInfo.imageur": aaa,
        });
      },
      fail() {
        consolge("获取头像失败啦！");
      },
    });
  },

  //显示头像框状态的值
  f4: function () {
    var that = this;
    if (that.data.userInfo.xianshi1 != true) {
      that.setData({
        "userInfo.xianshi2": false,
        "userInfo.xianshi3": false,
        "userInfo.xianshi1": true,
      });
    } else {
      that.setData({
        "userInfo.xianshi1": false,
      });
    }
  },
  f5: function () {
    var that = this;
    if (that.data.userInfo.xianshi2 != true) {
      that.setData({
        "userInfo.xianshi1": false,

        "userInfo.xianshi3": false,
        "userInfo.xianshi2": true,
      });
    } else {
      that.setData({
        "userInfo.xianshi2": false,
      });
    }
  },
  f6: function () {
    var that = this;
    if (that.data.userInfo.xianshi3 != true) {
      that.setData({
        "userInfo.xianshi1": false,

        "userInfo.xianshi2": false,
        "userInfo.xianshi3": true,
      });
    } else {
      that.setData({
        "userInfo.xianshi3": false,
      });
    }
  },

  //点击图标合成头像
  compose: function (e) {
    var that = this;
    var aimage = that.data.userInfo.imageur;
    var bimage;

    wx.showLoading({
      title: "正在制作中",
    });

    /*setTimeout(function () {
      wx.hideLoading()
    }, 5000)*/
    const contex = wx.createCanvasContext("ahaucanvas");
    contex.clearRect(0, 0, 840, 840);
    /*if(that.data.userInfo.shifouhuancun===1){
    wx.getImageInfo({
      url: that.data.userInfo.imageur,
      success(res){
        if (res.statusCode === 200) {
          aimage=res.path;
          console.log(aimage)
         
         
        }
        wx.getImageInfo({
          src: e.currentTarget.dataset.id,
          success(res){
              bimage = res.path;
              console.log(bimage);
              contex.drawImage(aimage,0,0,840,840);
              contex.save();
              contex.restore();
              contex.drawImage(bimage, 0, 0, 840,840);
              contex.draw(true, setTimeout(function() {
                wx.canvasToTempFilePath({ //导出图片
                  width: 840,
                  height: 840,
                  destWidth: 840,
                  destHeight: 840,
                  canvasId: 'ahaucanvas',
                  success(res){
                    console.log(res.tempFilePath)
                  
                  that.setData({
                    'userInfo.hechenghouxianshi':false,
                    'userInfo.scuecimage':res.tempFilePath,
                    
                  })
                  },
                  fail(res){
                      console.log("绘图失败")
                  }
                }, this)
              }, 1000))
          },
          
          
        })
      },
      fail(r){
        console.log("aaaa")
      }
    })  
  }*/

    wx.getImageInfo({
      src: e.currentTarget.dataset.id,
      success(res) {
        bimage = res.path;
        console.log(bimage);
        contex.drawImage(aimage, 100, 100, 640, 640);
        contex.save();
        contex.restore();
        contex.drawImage(bimage, 0, 0, 840, 840);
        contex.draw(
          true,
          setTimeout(function () {
            wx.canvasToTempFilePath(
              {
                //导出图片
                width: 840,
                height: 840,
                destWidth: 840,
                destHeight: 840,
                canvasId: "ahaucanvas",
                quality: 1,
                success(res) {
                  console.log("画图！");
                  console.log(res.tempFilePath);
                  wx.hideLoading();
                  that.setData({
                    "userInfo.hechenghouxianshi": false,
                    "userInfo.scuecimage": res.tempFilePath,
                    "userInfo.buttonjinyong": false,
                  });
                },
                fail(res) {
                  console.log("绘图失败");
                },
              },
              this
            );
          }, 1000)
        );
      },
    });
  },

  //监听函数
  onShow: function () {
    var imageur = app.globalData.globalurl;
    console.log("监听中");
    var that = this;
    that.setData({
      "userInfo.imageur": imageur,
    });
  },

  onShareAppMessage: function () {
    /*
     return {
       title: '民大专属头像',    //自定义标题   string
       path: ` pages/index/index`  //这个地址需要把页面路径拼接的参数发送出去,直写页面地址的话，别人进入会是空的页面
     }*/
  },
  onShareTimeline: function (res) {
    /* 
     return {
       title:'民大专属头像' , //字符串  自定义标题
       path: ` pages/index/index`,
       imageUrl:'/miniprogram/images/background.png'   //图片地址
     }*/
  },
});
