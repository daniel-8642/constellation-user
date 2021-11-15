<template>
  <div>
    <div id="content_box">
      <div v-if="loading">
        <a-spin style="margin: 100px"></a-spin>
        <br>
        <button style="margin: 50px" v-if="timeout" @click="$router.push('/')">返回主页</button>
      </div>
      <div v-if="!loading">
        <a-icon type="left-circle" theme="twoTone" twoToneColor="#FFD500FF"
                style="font-size: 25px; position: relative; top: 50px;left: -120px" @click="$router.push('/')"/>
        <h1 style="margin: 50px 20px 20px;">{{ name }}</h1>
        {{ datetime }}的运势
        <br>
        速配星座::{{ QFriend }}
        <br>
        幸运色:{{ color }}
        <br><br>
        <a-progress type="circle" :percent=parseInt(health) :format="percent => `健康指数:${percent}`" :width="100"/>
        <a-progress type="circle" :percent=parseInt(love) :format="percent => `爱情指数:${percent}`" :width="100"/>
        <a-progress type="circle" :percent=parseInt(work) :format="percent => `工作指数:${percent}`" :width="100"/>
        <a-progress type="circle" :percent=parseInt(money) :format="percent => `财运指数:${percent}`" :width="100"/>
        <br><br>
        <p>综合指数</p>
        <a-progress :percent=parseInt(all) style="width: 80%" :format="percent=> `${percent}`"/>
        <br><br>
        幸运数字:{{ number }}
        <br><br>
        <div style="margin: 0 auto;width: 400px">
          {{ summary }}
        </div>
      </div>
    </div>
    <a-modal v-model="modalVisible" v-bind:title=errMessage @ok="handleOk">
      <p>{{ errDescription }}</p>
      <p>是否返回首页?</p>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "showInfo",
  data: function () {
    return {
      //详细信息框弹出状态
      modalVisible: false,
      //错误标题
      errMessage: "",
      //错误详细信息
      errDescription: "",
      //加载中
      loading: true,
      //加载超时定时器
      loadTimer: "",
      //加载超时标志
      timeout: false,
      //保存服务返回信息
      name: '',
      QFriend: '',
      color: '',
      datetime: '',
      health: -1,
      love: -1,
      work: -1,
      money: -1,
      number: -1,
      summary: '',
      all: -1,
      result_code: 200,
      error_code: 0
    }
  },
  methods: {
    //处理加载api超时
    checkLoading() {
      if (this.loading === true) {
        this.timeout = true
      }
    },
    //弹出错误信息
    openErrNotification() {
      this.$notification.open({
        message: this.errMessage,
        description: this.errDescription,
        onClick: () => {
          this.showModal()
        },
      });
    },
    //信息详情窗口
    showModal() {
      this.modalVisible = true;
    },
    handleOk(e) {
      console.log(e);
      this.modalVisible = false;
    },
  },
  created() {
    this.loading = true;
    this.loadTimer = setTimeout(this.checkLoading, 8000)
    if (this.$store.state.consName !== 'none') {
      this.$axios({
        method: 'get',
        url: '/api',
        params: {
          key: "e1f7fff20b301745c64b655e0ef231d7",
          type: "today",
          consName: this.$store.getters.consName.name,
        }
      }).then((response) => {
        //错误处理
        console.log(response)
        if (response.data.error_code===205801) {
          this.errMessage="错误的运势类型"
          this.errDescription="错误号: 205801"
          this.openErrNotification()
        }else if(response.data.error_code===205802) {
          this.errMessage="错误的星座名称"
          this.errDescription="错误号: 205802 星座:"+this.$store.getters.consName.name
          this.openErrNotification()
        }
        else if(parseInt(response.data.error_code)<20000&&parseInt(response.data.error_code)>=10000){
          this.errMessage="系统错误 : "+response.data.error_code
          this.errDescription="系统错误 : "+response.data.error_code
          this.openErrNotification()
        }
        else if (response.data.error_code===0)
        {
          this.name = response.data.name
          this.QFriend = response.data.QFriend
          this.color = response.data.color
          this.datetime = response.data.datetime
          this.health = response.data.health
          this.love = response.data.love
          this.work = response.data.work
          this.money = response.data.money
          this.number = response.data.number
          this.summary = response.data.summary
          this.all = response.data.all
          this.result_code = response.data.result_code
          this.error_code = response.data.error_code
          this.loading = false
        }
      }).catch((error) => {
        this.errMessage = "请求异常"
        this.errDescription = String(error)
        this.openErrNotification()
      })
    } else {
      this.$router.push('/')
    }

    this.$axios({
      method: 'get',
      url: '/bpi',
      params: {
        key: "2875034dbd22bbe9e8414fade4c6a1ed",
        city: "苏州",
      }
    }).then((response) => {
      //错误处理
      console.log(response)
      if (response.data.error_code===0)//判断请求状态
      {
        // this.name = response.data.name
      }
    })

  },
  beforeDestroy() {
    clearTimeout(this.loadTimer)
  },

}


</script>

<style>
</style>
