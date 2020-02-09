import axios, {AxiosPromise} from 'axios'

const http = axios.create({
  baseURL: 'http://www.mocky.io/',
  headers: {
    Accept: 'application/json, text/plain, */*',
    get: {
      'Content-Type': 'application/json'
    },
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
})

export default class Http {
  public static get(url: string, data: any): AxiosPromise {
    return http.get(url, data)
  }
}
