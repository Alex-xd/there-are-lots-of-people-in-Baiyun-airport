/**
 * 网络请求框架封装
 *
 * @author ZhangBoyuan
 */

import Axios from 'axios'
import QS from 'querystring'
import * as storage from 'utils/storage'
import MockAdapter from 'axios-mock-adapter'
import * as indexPage from 'api/mock/indexPage'

// 创建Mock服务实例
const mock = new MockAdapter(Axios);

mock.onPost('/api/shequ/getIndexTopicList').reply(200, indexPage.getTopicList)
mock.onPost('/api/shequ/getIndexBasicInfo').reply(200, indexPage.getIndexBasicInfo)


Axios.defaults.baseURL = 'https://' // FIXME:请求域名

// TODO 设置超时时间
Axios.defaults.timeout = 10000

Axios.defaults.headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded',
    'api-version': 2
}

// TODO http code 校验
Axios.defaults.validateStatus = function (status) {
    return status
}

// TODO GET 请求 params 序列化
Axios.defaults.paramsSerializer = function (params) {
    return QS.stringify(params)
}

// TODO 设置POST等请求 body 序列化
Axios.defaults.transformRequest = [function (body) {
    let data = body || {}

    if (body instanceof window.FormData) {
        return body
    }

    if (!data.AuthorizationV2) {
        data.AuthorizationV2 = storage.get('sdToken')
    }
    return QS.stringify(data)
}]

// TODO 设置统一请求拦截
// Axios.interceptors.response.use(response => {
//   if (response.data.code === 0) {
//     return Promise.resolve(response.data)
//   }
//   account.interceptHttpCode(response.data.code)
//   return Promise.reject(response.data)
// }, error => {
//   return Promise.reject(error)
// })

/**
 * 统一 GET 请求
 * 
 * @param url
 * @param params --> GET 请求参数（***?name=walid&age=25）
 */
function get(url, params) {
    return Axios.get(url, {params: params})
}

/**
 * 统一 POST 请求
 * 
 * @param url
 * @param body --> POST 请求 data
 */
function post(url, body) {
    return Axios.post(url, body);
}

export default {
    get: get,
    post: post
}
