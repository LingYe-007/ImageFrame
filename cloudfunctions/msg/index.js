const cloud = require('wx-server-sdk')

cloud.init({
  env:'mindatouxiang-5g56l8c62275aca1'
}
)
 

exports.main = async (event, context) => {
  const { value } = event;
  try {
    const result = await cloud.openapi.security.imgSecCheck({
      media: {
        header: {
          'Content-Type': 'application/octet-stream'},
        contentType: 'image/png',
        value: Buffer.from(value)
        }
      })
      if (result && result.errCode.toString() === '87014') {
        return { code: 500, msg: '内容含有违法违规内容', data: result }
      } else {
        return { code: 200, msg: '内容ok', data: result }
      }
    } catch (err) {
      // 错误处理
      if (err.errCode.toString() === '87014') {
        return { code: 500, msg: '内容含有违法违规内容', data: err }
      }
      return { code: 502, msg: '调用imgSecCheck接口异常', data: err }
    }
  }
  