<template>
  <div>
    <div style="padding-top: 60px" id="content_box">
      <a-date-picker @change="onChange"/>
      <br>
      <button style="margin-top: 30px" @click="$router.push('/info')">{{ show }}</button>
    </div>
  </div>
</template>

<script>
import util from '../utils/util'
export default {
  props: {},
  name: "dateSelector",
  data() {
    return {
      show: "查看",
    }
  },
  methods: {
    onChange(dateValue) {
      if (dateValue.month() == null) {
        return;
      }
      let ret = util.horoscopes(dateValue)
      this.$store.commit('alterCons', {name: ret})
    },
  },
}
</script>

<style scoped>
#content_box {
  margin: 0 auto;
  background-color: white;
  align-content: center;
  left: 5px;
  top: 100px;
  width: 400px;
  height: 600px;
  line-height: 20px;
  border-radius: 100px;
  text-align: center;
  box-shadow: 0 0 7px -1px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(187, 187, 187, 100);
}
</style>