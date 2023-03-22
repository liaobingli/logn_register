const key = 'token'

// 设置token
export function setToken (token) {
  return localStorage.setItem(key, token)
}

// 获取token
export function getToken () {
  return localStorage.getItem(key)
}

// 移除token

export function removeToken () {
  return localStorage.removeItem(key)
}
