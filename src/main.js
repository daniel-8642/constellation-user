import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "/src/style/style.css";
import axios from 'axios';
import VueRouter from "vue-router";
import routes from "./routes"
Vue.use(Antd);
Vue.use(Vuex);
Vue.use(VueRouter)
Vue.prototype["$axios"] = axios    //全局注册，使用方法为:this.$axios

const router=new VueRouter({
    //mode:"history",
    routes
})

const store = new Vuex.Store({
    state: {
        consName: 'none',
    },
    mutations: {
        alterCons(state,name) {
            state.consName = name;
        },
    },
    getters:{
        consName(state){
            return state.consName
        }
    }
})


new Vue({
    router,
    render: h => h(App),
    store,
}).$mount('#app')
