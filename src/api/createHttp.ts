import axios, {
  AxiosPromise,
  AxiosResponse,
  AxiosError,
} from 'axios'

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

const resFn = (response: AxiosResponse) => response
const rejFn = (error: AxiosError) => Promise.reject(error.response)
http.interceptors.response.use(resFn, rejFn)

export default class Http {
  public static get(url: string, data: any): AxiosPromise {
    return http.get(url, data)
  }
}
