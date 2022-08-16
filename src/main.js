/*
* js
* */
import Vue from "vue"
import App from "@/App";
//引入路由器
import router from "./router"

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    router
})