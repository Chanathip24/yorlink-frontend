import axios, {
  AxiosError,
  AxiosHeaders,
  type AxiosInstance,
  type AxiosResponse,
  type AxiosStatic,
  type InternalAxiosRequestConfig,
} from 'axios'

import { camelizeKeys } from '@/utilities'

const { create }: AxiosStatic = axios
export class YorLinkBaseClient {
  readonly axiosInstance: AxiosInstance
  readonly axiosWithAuthInstance: AxiosInstance // with auth

  constructor(baseURL: string, headers?: AxiosHeaders) {
    this.axiosInstance = create({
      baseURL,
      headers,
    })

    this.axiosWithAuthInstance = axios.create({
      baseURL,
      headers,
    })
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Do something before request is sent

        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      },
    )

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse<any, any>) => {
        // Do something before request is sent
        //  e.g. add authorization header
        return camelizeKeys(response) as AxiosResponse<any, any>
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      },
    )
    this.axiosWithAuthInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      },
    )
    this.axiosWithAuthInstance.interceptors.response.use(
      (response: AxiosResponse<any, any>) => {
        return camelizeKeys(response) as AxiosResponse<any, any>
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      },
    )
  }
}
