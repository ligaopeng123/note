<template>
  <div>
    <nav-header></nav-header>
    <div class="panel_body">
      <nav-left></nav-left>
      <nav-body></nav-body>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import NavHeader from './../components/navHeader'
  import NavFooter from './../components/navFooter'
  import NavLeft from './../components/navLeft.vue'
  import NavBody from './../components/navBody.vue'
  export default {
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components : {
      NavHeader,NavFooter,NavLeft,NavBody
    }
  }
</script>
