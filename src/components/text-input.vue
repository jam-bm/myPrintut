<template>
    <!-- <div style="position: relative; width: inherit; height: inherit"> -->
        <vue-draggable-resizable :w="100" :h="100" @dragging ="onDrag" @resizing="onResize" :parent="true" :grid="[1,1]">
            <!-- <div class="constr__cnt">
                <div class="draggable"></div>
                <div class='resizers'>
                <div class='resizer resizer-left'></div>
                <div class='resizer resizer-right'></div>
                </div>
                <div contenteditable="true" class="constructor-input-text">Текст</div>
            </div> -->
            <p>Hello! I'm a flexible component. You can drag me around and you can resize me.</p><br>
        </vue-draggable-resizable>
        <!-- <div style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
            
        </div> -->
    <!-- </div> -->
</template>

<script>
export default {
    data(){
        return {
            width: 0,
            height: 0,
            x:0,
            y:0
        }
    },

    methods: {
        onResize(x,y,width,height){
            this.x = x;
            this.y= y;
            this.width = width
            this.height = height
        },
        onDrag(x, y){
            this.x = x;
            this.y = y
        }
    },
}
</script>

<style>

</style>
