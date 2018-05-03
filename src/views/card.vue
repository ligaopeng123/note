<template>
    <div class="panel_body">
      <nav-header></nav-header>
      <nav-left></nav-left>
      <nav-body></nav-body>
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
