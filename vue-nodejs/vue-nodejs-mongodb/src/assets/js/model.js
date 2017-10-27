import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default{
    getNews(successCallBack, errorCallBack, data){
        let url = 'http://localhost:3000/api/index/getNews';
        Vue.http.get(url)
        .then(res=>{  
            successCallBack(res); 
        }, res=>{
            errorCallBack(res);
        })
    },
    register(successCallBack, errorCallBack, data){
        let url = 'http://localhost:3000/api/register';
        Vue.http.post(url, data)
        .then(res=>{
            successCallBack(res);
        },res=>{
            errorCallBack(res);
        })
    },
    login(successCallBack, errorCallBack, data){
        let url = 'http://localhost:3000/api/login';
        Vue.http.post(url, data)
        .then(res=>{
            successCallBack(res);
        },res=>{
            errorCallBack(res);
        })
    }
}


