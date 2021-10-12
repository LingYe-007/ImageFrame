// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    console.log('云被调用了')
    const imgResult = await cloud.openapi.security.imgSecCheck({
      media:{
        header:{'Content-Type':'application/octet-stream'},
        contentType:'image/png'||'image/jpg'||'image/jpeg'||'image/tif',
        value:Buffer.from(event.event.data)
      }
    })
    return await imgResult
  }catch(err){
    return err
  }
}