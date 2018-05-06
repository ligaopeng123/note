<template>
     <header class="header_nav">
       <div class="header_nav_text">
         <a>
         <input type="text" placeholder="给简历命个名吧" name="resume_name" v-model="name" v-on:blur="setCVName(name)">
         </a>
       </div>
       <div style="float: right;padding-top: 5px;padding-right: 15px;cursor: pointer">
         <a>登陆</a>
       </div>
     </header>
</template>
<script>
  import './../assets/css/card.css'

  export default {
    data(){
      return {
        name : '',
        logInState : false
      }
    },
    mounted(){
      this.getHeadData();
    },
    methods : {
      getHeadData(){
        this.oldName = this.name ='高级前端开发工程师（数据可视化方向）';
        this.logInState = true;
//        axios.get('/card/leftData').then((result)=>{
//          let data = result.data.data;
//          this.leftData =data;
//        });
      },
      setCVName(val){
        if(val == ''){
          //alert('简历不能为空');
          return;
        }
        if(this.oldName != val){
          //下发，更改简历
          this.oldName = val;
        }
      }
    }
  }
</script>


