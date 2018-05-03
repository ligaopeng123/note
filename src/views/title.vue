<template>
  <div class="title_padding"><span>{{title}}</span></div>
</template>
<script>

    export default
    {
        props: ["title"],
        data()
        {
            return {
              title: '专业技能'
            }
        },
      methods:{
        setTitle(title){
          this.title = title;
        }
      }
    }
</script>
