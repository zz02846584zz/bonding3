import Api from './api'

class UserApi extends Api {
  static USER_LOGIN = {
    method: 'GET',
    url: '/todos/1'
  }

  static userLogin (params) {
    return this.callAxios(this.USER_LOGIN.method, this.USER_LOGIN.url, params, null, false)
  }
}

export default UserApi
