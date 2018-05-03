<template>
  <div class="body_padding">
    <modelTitle title="专业技能"></modelTitle>
    <div id="dashboard_skill_svg"></div>
  </div>
</template>
<script>
    import * as d3 from 'd3';
    import d3tooltip from 'd3-tooltip'
    import modelTitle from './title.vue'
    export default
    {
        //el : "#dashboard_skill_svg",
        data(){
            return {
                msg: ''
            }
        },
        mounted() {
          this.getSvgDom();
        },
        methods : {
          getSvgDom(){
            var height = 200;	//画布的高度
            var width = this.$el.parentNode.offsetWidth-240 || 400;
            console.log(this.$el)
            var svg = d3.select('#dashboard_skill_svg')//选择文档中的body元素
              .append("svg")				//添加一个svg元素
              .attr("width", width)		//设定宽度

              .attr("height", height);	//设定高度
            var dataset = [650, 230,200,180,150,130,100,90,50,10];

            var num = dataset.length-1;

            var dataX = ['javaScript','CSS','HTML','canvas','svg','webgl','vue.js','jQuery','node.js','java'];
            var dataY = ['0','1年','2年','3年','4年'];
            var dataAx = dataX.concat(dataY);

            var top = 10,
              left = 80,
              right = 30,
              bottom = 30,
              rectHeight = (height-bottom-top-5)/dataset.length,	//每个矩形所占的像素高度(包括空白)
              rectWidth = (width-left-right)/(dataY.length-1);

            var tooltip = d3tooltip(d3);
            /**
             * 绘制外层边框
             */
            svg.append("rect")
              .attr("x",left)
              .attr("y",top)
              .attr("width",width-left-right)
              .attr("height",height-top-bottom)
              .attr("fill",'#F6F6F6')
              .attr("stroke","#555");
            /**
             * 绘制柱子
             */
            svg.selectAll("svg")
              .data(dataset)
              .enter()
              .append("rect")
              .attr("x",left)
              .attr("y",function(d,i){
                return i * rectHeight+top+5;
              })
              .attr("rx",5)
              .attr("ry",5)
              .attr("width",function(d,i){
                return d;
              })
              .attr("height",rectHeight-5)
              .attr("fill","steelblue")
              .on('click',function(d,i){
                //return alert(d);
              })
              .on("mouseover", (d,i)=> {
                var html = d.toString();
                tooltip.html(dataX[i]+': '+Math.round((html/width)*12*4)+'个月')
                tooltip.show()
              })
              .on("mouseout", (d,i)=>{
                  tooltip.hide();
              })
              .attr('cursor','pointer')
              .attr('opacity',0.8)
              .append("animate")
              .attr('attributeName','width')
              .attr('attributeType','XML')
              .attr('begin','0s')
              .attr('dur','1s')
              .attr('fill','freeze')
              .attr('from','20')
              .attr('to',function(d){
                return d;
              });


            svg.selectAll("text")
              .data(dataAx)
              .enter()
              .append("text")
              .attr("x",function(d,i){
                if(i>num){
                  return (i-num-1) * rectWidth+left-10;
                }
                return 0;
              })
              .attr("y",function(d,i){
                if(i>num){
                  return height-bottom+12;
                }
                return i * rectHeight+23;
              })
              .attr("fill","#555")
              .attr('font-size',12)
              .text(function(d,i){
                return d;
              });
          }
        },
      components : {
        modelTitle
      }
    }
</script>
