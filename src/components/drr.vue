<template>
    <div>
        <drr
            :x="x"
            :y="y"
            :w="width"
            :h="height"
            :rotateable="true"
            @rotate="printRect"
            @rotatestop="rotateStop"
        > 
            <div ref="ddrInfo"></div>
            <slot>
            </slot>

            <img :src="imgSrc" alt="" v-if="imgSrc">
        </drr>
    </div>
</template>

<script>
export default {
    props: ['imgSrc'],
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

</style>
