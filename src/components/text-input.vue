<template>
  <!-- <vue-draggable-resizable :handles="['tm','bm','ml','mr']" :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true" :grid="[10, 10]">
    123
  </vue-draggable-resizable>    -->
  
<div>

    <drr
      :x="x"
      :y="y"
      :w="width"
      :h="height"
      :rotateable="true"
      :hasActiveContent="true"
      @rotate="printRect"
      @rotatestop="rotateStop"
  > 
  
  <div class="tooltip" >
     <span class="drr-rotate-degree-info tooltiptext" ref="ddrInfo"></span>
  </div>

            Test
  </drr>
     
</div>


</template>

<script>
import Rotate from 'vue-rotate'
export default {
    data(){
        return {
            width: 100,
            height: 100,
            x: 0,
            y: 0,
        }
    },

    methods: {
      printRect(rect){
        console.log(rect)
        let r = rect.angle
        this.$refs.ddrInfo.innerHTML = r < 0 ? Math.floor(360 + r) : Math.round(rect.angle)
      },
      rotateStop(){
        setTimeout(() => {
          // this.$refs.ddrInfo.innerHTML = ''
        }, 1000)
      }
    }
}
</script>

<style>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
