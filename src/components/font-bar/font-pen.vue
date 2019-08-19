<template>
    <div class="row p-4">
        <button v-for="item in colors" :key="item" :style="[{background: item}]" class="color-btn col-1" @click="callColor(item)"></button>
        <br>    
        <chrome-picker v-model="color" @input="callPickerColor(color)" class="picker"/>
    </div>
</template>

<script>
import { Chrome } from 'vue-color'
export default {
    data() {
        return {
            colors: {
                orange: '#ffb74d',
                pink: '#f06292',
                violet: '#9575cd',
                darkgreen: '#4db6ac',
                blue: '#29b6f6',
                lightgreen: '#aed581',
                green: '#66bb6a',
                yellow: '#fff176',
                red: '#e64a19',
                brown: '#8d6e63',
                black: '#212121',
                white: '#ffffff'
            },
            color: { r: 255, g: 0, b: 0 }
        }
    },
    components: {
        'chrome-picker': Chrome
    },
    methods: {
        callColor(item) {
            console.log(this.$root.bColor)
            this.$root.bColor = item
            this.$root.bgImg = ''
            localStorage.setItem('bColor', item)
            localStorage.setItem('bgImg', '')
        },
        callPickerColor(item) {
            console.log(this.$root.bColor)
            this.$root.bColor = item.hex8
            this.$root.bgImg = ''
            localStorage.setItem('bColor', item.hex8)
            localStorage.setItem('bgImg', '')
        }
    },
}
</script>

<style>
.color-btn {
    margin: 5px;
    height: 30px;
}
.picker {
    width: 100%;
}
</style>