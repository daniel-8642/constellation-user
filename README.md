项目详情请见  [后端项目](https://gitee.com/daniel8642/constellation-chart-backend)

如果需要更改接口请求地址

src/pages/ShowInfo.vue文件中大约100行位置有唯一一个axios请求

可以自行修改uel,这里密钥可以在聚合数据免费申请.

对应处理该请求的模块在后端项目Command/star.go文件中,由于聚合数据接口不支持跨域. 不能从浏览器直接访问聚合数据的接口.后端该模块也有聚合数据的密钥.记得同时修改

项目效果
http://star.86428642.xyz/


项目地址:https://gitee.com/daniel8642/vue-constellation-chart

数据面板项目:https://gitee.com/daniel8642/constellation-chart-backend

后端项目:https://gitee.com/daniel8642/constellation-fortune-backend

