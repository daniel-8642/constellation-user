<template>
  <div>
    <div id="content_box">
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
      <a-progress :percent=parseInt(all) />
      <br><br>
      幸运数字:{{ number }}
      <br><br>
      <div style="margin: 0 auto;width: 400px">
        {{ summary }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "showInfo",
  data: function () {
    return {
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
  created() {
    if (this.$store.state.consName !== 'none') {
      this.$axios({
        method: 'get',
        url: '/api' ,
        params:{
          key:"e1f7fff20b301745c64b655e0ef231d7",
          type:"today",
          consName:this.$store.getters.consName.name,
        }
      }).then((response) => {
        console.log(response.data)
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
      }).catch((error) => {
        console.log(error)//todo:错误处理
      })
    }
  },

}
</script>

<style scoped>
#content_box {
  margin: 0 auto;
  background-color: white;
  align-content: center;
  top: 100px;
  width: 450px;
  height: 600px;
  line-height: 20px;
  border-radius: 100px;
  text-align: center;
  box-shadow: 0 0 7px -1px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(187, 187, 187, 100);
}

.ant-progress-circle-wrap,
.ant-progress-line-wrap {
  margin-right: 8px;
  margin-bottom: 5px;
}
</style>