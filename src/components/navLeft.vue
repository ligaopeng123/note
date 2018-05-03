<template>
  <div class = "wbdCv_leftbar">
    <div class="resume_content_editor">
      <ul class="wbdCv-leftbar_ui">
        <li v-for="item in leftData">
          <a href="javascript:;" @click="getPosition();" class="wbdCv-leftbar_a" >
            <span>{{item.name}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data(){
      return {
        leftData: []
      }
    },
    mounted(){
      this.getLeftData();
    },
    methods : {
      getLeftData(){
        axios.get('/card/leftData').then((result)=>{
          let data = result.data.data;
          this.leftData =data;
        });
      },
      getPosition(){
        axios.get('/card/leftData').then((result)=>{

        });
      }
    }
  }
</script>

