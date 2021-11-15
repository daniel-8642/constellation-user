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

<style >
</style>
