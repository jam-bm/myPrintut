<template>
    <div class="d-d">
        <drr
            :x="x"
            :y="y"
            :w="width"
            :h="height"
            :rotateable="true"
            :draggable="true"
            @rotate="printRect"
            @rotatestop="rotateStop"
            @drag="onDragResize"
            @resize="onDragResize"
            ref="ddrRef"
            
        > 
            <div ref="ddrInfo" :class="['ddr', {hidden:test}]"></div>
            <slot>
            </slot>

            

            <img :src="imgSrc" alt="" v-if="imgSrc">
        </drr>
    </div>
</template>

<script>

export default {
    mounted(){

    },
    props: ['imgSrc','xNum','yNum','kal'],
    data(){
        return {
            width: 100,
            height: 100,
            x: 0,
            y: 0,
            test: true,
            __magnet: null
        }
    },
    methods: {
      printRect(rect){
        console.log(rect)
        let r = rect.angle
        this.$refs.ddrInfo.innerHTML = r < 0 ? Math.floor(360 + r) : Math.round(rect.angle)
        this.test=false
      },
      rotateStop(){
        setTimeout(() => {
          // this.$refs.ddrInfo.innerHTML = ''
          this.test = true
        }, 1000)
      },
      onDragResize(rect){
        this.$emit('coordinate', rect.x, rect.y, this.kal)
      }
    }
}
</script>

<style>
  img{
      padding: 2px;
      width: 100%;
      height: inherit;
  }
  .ddr {
    position: absolute;
    top: -40px;
    right: 48%;
  }
  .hidden {
    display: none;
  }


</style>
