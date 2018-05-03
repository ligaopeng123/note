<template>
    <div class="wbdCv_body" id="wbdCv_body">
      <job></job>
      <basicInfo></basicInfo>
      <skill></skill>
    </div>
</template>
<script>
  import skill from './../views/skill.vue'
  import job from './../views/job.vue'
  import basicInfo from './../views/basicInfo.vue'
  export default {
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components : {
      skill,job,basicInfo
    }
  }
</script>



