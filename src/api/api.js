import axios from 'axios'

class Api {
  static SERVER = 'https://api.hosowo.gifts/api';

  static LOCAL = '/api';

  static LOCATION = this.LOCAL;

  static async callAxios (method, url, params, contentType, auth) {
    const headers = {}
    headers['Content-Type'] = contentType || 'application/x-www-form-urlencoded'

    if (auth) {
      headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    }

    const { status, data } = await axios({
      headers,
      method,
      url: this.LOCATION + url,
      data: params
    })
    return new Promise((resolve, reject) => {
      if (status === 200) {
        // if (data.code === 401){
        //   localStorage.setItem('token', '');
        //   data.message = '登入逾時或憑證無效!';
        //   // reject(new Error('登入逾時或憑證無效!'));
        // }
        resolve(data)
      } else {
        reject(new Error('error: ' + data.error + ',message: ' + data.message))
      }
    })
  }
}

export default Api
