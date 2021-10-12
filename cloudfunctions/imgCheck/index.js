// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    console.log(event)
    // console.log("云被调用了");
    const res = await cloud.downloadFile({
      fileID: event.event,
    });
    const buffer = res.fileContent;
    console.log(buffer)
    if (buffer) {
      var imgResult = await cloud.openapi.security.imgSecCheck({
        media: {
          header: { "Content-Type": "application/octet-stream" },
          contentType: "image/jpg",
          value: buffer,
        },
      });
      return await imgResult;
    }
  } catch (err) {
    return err;
  }
};
