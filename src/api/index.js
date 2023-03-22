import request from '@/utils/request'
export const loginAPI = (username, password) => {
  return request({
    url: '/api/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export const registerAPI = (username, password) => {
  return request({
    url: '/api/register',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
