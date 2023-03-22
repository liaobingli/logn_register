import CryptoJS from 'crypto-js'
// 定义加密和解密方法
// export const Encrypt = (plaintext, secretKey) => {
//   const ciphertext = CryptoJS.AES.encrypt(plaintext, secretKey).toString()
//   return ciphertext
// }
// 定义加密方法
export const Encrypt = (plaintext, secretKey) => {
  // 将密钥转换为字节数组
  const keyBytes = CryptoJS.enc.Utf8.parse(secretKey)

  // 对待加密字符串进行AES加密
  const encrypted = CryptoJS.AES.encrypt(plaintext, keyBytes, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })

  // 返回加密后的结果
  return encrypted.toString()
}
