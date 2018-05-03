<template>
  <div class="body_padding">
    <modelTitle title="基本信息"></modelTitle>
  </div>
</template>

<script>
    import modelTitle from './title.vue'
    export default
    {
        data()
        {
            return {
                msg: 'hello vue'
            }
        },
        components:{
          modelTitle
        }
    }
</script>
