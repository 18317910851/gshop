/*
* ajax请丘函数模块
* 返回值：promise对象(异步返回的对象是：response.data)
* */

import axios from "axios"

export default function ajax(url, data = {}, type = "GET") {
    return new Promise(function (resolve, reject) {
        //执行异步ajax请求
        let promise
        if (type === "GET") {
            //准备url query参数
            let dataStr = ""  //数据拼接
            Object.keys(data).forEach(key => {
                dataStr += key + "=" + data[key] + "&"
            })
            if (dataStr !== "") {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"))
                url = url + "?" + dataStr
            }
            // 发送get请求
            promise = axios.get(url)
        } else {
            //发送post请求
            promise = axios.post(url, data)
        }
        promise.then(function (response) {
            //成功调用resolve()
            resolve(response.data)
        }).catch(function (error) {
            //失败调用reject()
            reject(error)
        })
    })
}