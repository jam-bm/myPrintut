<template>
    <div 
      @mouseup="reSet"
      ref="ddrContRef"
      >
      <drr
            :style="{marginTop: (pt==0 ? pb : pt) + 'px' , marginLeft: (pl==0 ? pr : pl) + 'px' }"
            :x="x"
            :y="y"
            :w="width"
            :h="height"
            :angle="angle"
            :rotateable="true"
            :draggable="true"
            
            @rotate="printRect"
            @rotatestop="rotateStop"
            @change="onDragResize"
            @drag="onDragResize"
            @resize="onDragResize"            
        >

            <div class="dot-info ddr-center">
              {{centerX}} , {{centerY}}
            </div>
        
            <div ref="ddrInfo" :class="['ddr', {hidden:test}]"></div>
            <slot>
            </slot>

            

            <img :src="imgSrc" alt="" v-if="imgSrc">
        </drr>
        
        <span v-if="lineActiveTop"  class="hori" :style="{top: linePosTop + 'px'}"></span>
        <span v-if="lineActiveBottom"  class="hori" :style="{top: linePosBottom + 'px'}"></span>
        <span v-if="lineActiveRight"  class="vert" :style="{left: linePosRight +'px'}"></span>
        <span  v-if="lineActiveLeft"  class="vert2" :style="{left: linePosLeft +'px'}"></span>

        
    </div>
</template>

<script>

export default {
  beforeMount() {
    this.width = this.currItem.w
    this.height = this.currItem.h
    this.x = this.currItem.x
    this.y = this.currItem.y
    this.angle = this.currItem.angle
  },
  mounted() {
    this.$emit('coordinate', this.x, this.y, this.kal, this.width, this.height, this.angle)
    document.addEventListener('keydown', (e) => {
      console.log('trying to move')
      console.log(this.$refs.ddrContRef)
      if(this.$refs.ddrContRef.children[0].classList.contains('active')) {
        this.moveFunc(e)
      }
    })

    
  },

  props: ['imgSrc','coText','kal','coImg'],
  computed: {
    topLeft(){
      return this.x - (this.width / 2)
    },
    centerX(){
      return this.x
    },
    centerY(){
      return this.y
    },
    topRight() {
      return this.x + (this.width / 2)
    },

    bottomLeft() {
      return this.y - (this.height / 2)
    },

    bottomRight() {
      return this.y + (this.height / 2) 
    },
    currItem(){
      return this.imgSrc ? 
        (this.coImg[this.kal] ? this.coImg[this.kal] : {x: 100, y: 100, w: 100, h: 100, angle: 0})
         : 
        (this.coText[this.kal] ? this.coText[this.kal] : {x: 100, y: 100, w: 100, h: 100, angle: 0})
    }
  },

  data(){
    return {
      width: 100,
      height: 100,
      x: 100,
      y: 100,
      angle: 0,
      __magnet: null,
      pl: 0,
      pt: 0,
      test: true,
      pr: 0,
      pb: 0,
      paddingtest: 50,
      lineActiveTop: false,
      lineActiveBottom: false,
      linePosTop: 0,  
      linePosBottom: 0,
      lineActiveRight: false,
      lineActiveLeft: false,
      linePosRight: 0,
      linePosLeft: 0,
      allArrays: [],
      mouseUP: false
    }
  },

  methods: {
    moveFunc(e){
      console.log('moving')
      console.log(e.key)
        if (e.key == 'ArrowUp') {
          this.y -= 1
          this.$emit('coordinate', this.x, this.y, this.kal, this.width, this.height, this.angle)
          e.preventDefault()
        }
        else if (e.key == 'ArrowDown'){
          this.y += 1
          this.$emit('coordinate', this.x, this.y, this.kal, this.width, this.height, this.angle)
          e.preventDefault()
        }
        else if (e.key == 'ArrowRight'){
          this.x += 1
          this.$emit('coordinate', this.x, this.y, this.kal, this.width, this.height, this.angle)
          e.preventDefault()
        }
        else if (e.key == 'ArrowLeft') {
          this.x -= 1
          this.$emit('coordinate', this.x, this.y, this.kal, this.width, this.height, this.angle)
          e.preventDefault()
        }
    },

    printRect(rect){
      let r = rect.angle
      this.$refs.ddrInfo.innerHTML = r < 0 ? Math.floor(360 + r) : Math.round(rect.angle)
      this.test=false
    },

    rotateStop(){
      setTimeout(() => {
        // this.$refs.ddrInfo.innerHTML = ''
        this.test = true
      }, 500)
    },

    lalaku() {
      console.log('lalala')
    },
    
    reSet(){
      let w = document.querySelectorAll('.drr')
      
      for(let i in w){
        if(w.hasOwnProperty(i)){
          // console.log('w[' + i + ']', w[i])
          w[i].className = 'drr inactive'
        }
      }

      if(this.$refs.ddrContRef.children[0]) {
          this.$refs.ddrContRef.children[0].className = 'drr active'
      }
      setTimeout(() => {
        // this.$refs.ddrContRef.children[0].classList.add('active')
        // console.log("resewt")
        this.pl = 0
        this.pr = 0
        this.pb = 0
        this.pt = 0
        this.lineActiveTop = false
        this.lineActiveBottom = false
        this.lineActiveRight = false
        this.lineActiveLeft =false
        this.mouseUP = true
        // console.log('ddrContRef', this.$refs.ddrContRef.children[0].classList.remove('active'))
      }, 500)
      
    },

    onDragResize(rect){
      this.x = rect.x
      this.y = rect.y

      this.pl = 0
      this.pt = 0
      this.pr = 0
      this.pb = 0
      this.lineActiveTop    = false
      this.lineActiveBottom = false
      this.lineActiveRight  = false
      this.lineActiveLeft   = false
      

      this.width  = rect.w
      this.height = rect.h
      this.angle  = rect.angle
      
      
      // Add coText elements to allArrays 
      for(let xnew in this.coText){
        // Hozirgi drag element text elementligini bilish va drag elementni coText dagi dannilarini allArrays ga qowmaslik
        if(xnew==this.kal && !this.imgSrc){
              continue
          }
        this.allArrays.push({
          x: this.coText[xnew].x,
          y: this.coText[xnew].y,
          w: this.coText[xnew].w,
          h: this.coText[xnew].h,
          angle: this.coText[xnew].angle
        })
      }
      // Add imgText elements to allArrays 
      for(let xnew in this.coImg){
        // Hozirgi drag element img elementligini bilish va drag elementni coImg dagi dannilarini allArrays ga qowmaslik
        if(xnew==this.kal && this.imgSrc){
              continue
          }
        this.allArrays.push({
          x: this.coImg[xnew].x,
          y: this.coImg[xnew].y,
          w: this.coImg[xnew].w,
          h: this.coImg[xnew].h,
          angle: this.coImg[xnew].angle
        })
      }
      

      for(let xnew in this.allArrays) {

        // Right side of the element - Left side of the drag
        if(Math.abs(this.allArrays[xnew].x+(this.allArrays[xnew].w)/2-rect.x+(rect.w)/2)<10) {
            // padding kengligini obektlar orasidagi masofaga qarab beriw
            this.pl = this.allArrays[xnew].x+(this.allArrays[xnew].w)/2-rect.x+(rect.w)/2
            rect.x  = this.allArrays[xnew].x+(this.allArrays[xnew].w)/2+(rect.w)/2
            // Borderni korsatiw
            this.lineActiveLeft = true
            // Borderga position beriw
            this.linePosLeft = this.allArrays[xnew].x+(this.allArrays[xnew].w)/2
            // For loopdan cqb ketiw
        }
        // Middle of the element - Left side of the drag
        if(Math.abs(rect.x-(rect.w)/2-this.allArrays[xnew].x)<10 && this.pl == 0) {
            this.pl = this.allArrays[xnew].x-rect.x+(rect.w)/2
            rect.x=this.allArrays[xnew].x+(rect.w)/2
            this.lineActiveLeft= true
            this.linePosLeft = this.allArrays[xnew].x
        }
        // Left of the element - Left side of the drag
        if(Math.abs(rect.x-(rect.w)/2-this.allArrays[xnew].x+(this.allArrays[xnew].w)/2)<5 && this.pl == 0) {
            this.pl = this.allArrays[xnew].x-rect.x+(rect.w)/2-(this.allArrays[xnew].w)/2
            rect.x = this.allArrays[xnew].x+(rect.w)/2-(this.allArrays[xnew].w)/2
            this.lineActiveLeft= true
            this.linePosLeft = this.allArrays[xnew].x-(this.allArrays[xnew].w)/2
        }
        // Center of the element - Center of the Drag from Right Left
        if(Math.abs(rect.x-this.allArrays[xnew].x)<5 && this.pl == 0) {
            this.pl = -(rect.x-this.allArrays[xnew].x)
            rect.x=this.allArrays[xnew].x
            this.lineActiveLeft= true
            this.linePosLeft = this.allArrays[xnew].x
        }
        // Left side of the element - Right side of the drag
        if(Math.abs(this.allArrays[xnew].x-(this.allArrays[xnew].w)/2-rect.x-(rect.w)/2)<10) {
            this.pr = this.allArrays[xnew].x-(this.allArrays[xnew].w)/2-rect.x-(rect.w)/2
            rect.x = this.allArrays[xnew].x-(this.allArrays[xnew].w)/2-(rect.w)/2
            this.lineActiveRight = true
            this.linePosRight = this.allArrays[xnew].x-(this.allArrays[xnew].w)/2
        }
        // Middle of the element - Right side of the drag            
        if(Math.abs(this.allArrays[xnew].x-rect.x-(rect.w)/2)<10) {
            this.pr = this.allArrays[xnew].x-rect.x-(rect.w)/2
            rect.x = this.allArrays[xnew].x-(rect.w)/2
            this.lineActiveRight = true
            this.linePosRight = this.allArrays[xnew].x
        }
        // Right of the element - Right side of the drag            
        if(Math.abs(this.allArrays[xnew].x+(this.allArrays[xnew].w)/2-rect.x-(rect.w)/2)<10) {
            this.pr = this.allArrays[xnew].x+(this.allArrays[xnew].w)/2-rect.x-(rect.w)/2
            rect.x = this.allArrays[xnew].x+(this.allArrays[xnew].w)/2-(rect.w)/2
            this.lineActiveRight = true
            this.linePosRight = this.allArrays[xnew].x+(this.allArrays[xnew].w)/2
        }
        // Bottom of the element - Top of the drag
        if(Math.abs((this.allArrays[xnew].h)/2+this.allArrays[xnew].y-rect.y+(rect.h)/2)<10) {
            this.pt = (this.allArrays[xnew].h)/2+this.allArrays[xnew].y-rect.y+(rect.h)/2
            rect.y = (this.allArrays[xnew].h)/2+this.allArrays[xnew].y+(rect.h)/2
            this.lineActiveTop = true
            this.linePosTop = (this.allArrays[xnew].h)/2+this.allArrays[xnew].y
        }
        // Middle the element - Top of the drag
        if(Math.abs(this.allArrays[xnew].y-rect.y+(rect.h)/2)<10) {
            this.pt = this.allArrays[xnew].y-rect.y+(rect.h)/2
            rect.y = this.allArrays[xnew].y+(rect.h)/2
            this.lineActiveTop = true
            this.linePosTop = this.allArrays[xnew].y
        }
        // Top the element - Top of the drag
        if(Math.abs(this.allArrays[xnew].y-(this.allArrays[xnew].h)/2-rect.y+(rect.h)/2)<10) {
            this.pt = this.allArrays[xnew].y-(this.allArrays[xnew].h)/2-rect.y+(rect.h)/2
            rect.y = this.allArrays[xnew].y-(this.allArrays[xnew].h)/2+(rect.h)/2
            this.lineActiveTop = true
            this.linePosTop = this.allArrays[xnew].y-(this.allArrays[xnew].h)/2
        }
        // Center of the element  - Center of the Drag From Top Bottom
        if(Math.abs(rect.y-this.allArrays[xnew].y)<5 && this.pt == 0) {
            this.pt = -(rect.y-this.allArrays[xnew].y)
            rect.y=this.allArrays[xnew].y
            this.lineActiveTop= true
            this.linePosTop = this.allArrays[xnew].y
        }
        // Top of the element - Bottom of the drag
        if(Math.abs(this.allArrays[xnew].y-(this.allArrays[xnew].h)/2-rect.y-(rect.h)/2)<10) {
            this.pb = this.allArrays[xnew].y-(this.allArrays[xnew].h)/2-rect.y-(rect.h)/2
            rect.y = this.allArrays[xnew].y-(this.allArrays[xnew].h)/2-(rect.h)/2
            this.lineActiveBottom = true
            this.linePosBottom = this.allArrays[xnew].y-(this.allArrays[xnew].h)/2
        }
        // Middle of the element - Bottom of the drag
        if(Math.abs(this.allArrays[xnew].y-rect.y-(rect.h)/2)<10) {
            this.pb = this.allArrays[xnew].y-rect.y-(rect.h)/2
            rect.y = this.allArrays[xnew].y-(rect.h)/2
            this.lineActiveBottom = true
            this.linePosBottom = this.allArrays[xnew].y
        }
        // Bottom of the element - Bottom of the drag
        if(Math.abs(this.allArrays[xnew].y+(this.allArrays[xnew].h)/2-rect.y-(rect.h)/2)<10) {
            this.pb = this.allArrays[xnew].y+(this.allArrays[xnew].h)/2-rect.y-(rect.h)/2
            rect.y = this.allArrays[xnew].y+(this.allArrays[xnew].h)/2-(rect.h)/2
            this.lineActiveBottom = true
            this.linePosBottom = this.allArrays[xnew].y+(this.allArrays[xnew].h)/2
        }
      }
      // Hozirgi drag elementni dannilarini App.vue ga yuboriw
      this.$emit('coordinate', rect.x, rect.y, this.kal, rect.w, rect.h, rect.angle)
      this.allArrays = []
    },
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

  .dot-info  {
    position: absolute;
    padding: 4px;
  }

  .ddr-top {
    top: 0;
    left: 0;
  }

  .ddr-left {
    top: 0;
    right: 0;
  }

  .ddr-bottom {
    bottom: 0;
    right: 0;
  }

  .ddr-right {
    bottom: 0;
    left: 0;
  }

  .ddr-center {
    bottom: 45%;
    top: 45%;
  }

  .d-d {
    width: 100%;
     position: absolute;
     border: 1px dashed;
  }
  .hori{
    border-top: 1px dashed;
    width: 100%;
    position: absolute;
}
.vert{
    border-right: 1px dashed;
    height: 100%;
    position: absolute;
}
.vert2{
    border-left: 1px dashed;
    height: 100%;
    position: absolute;
}
</style>
