<template>
    <div class="row p-4">
        <button v-for="item in colors" :key="item" :style="[{background: item}]" class="color-btn col-1" @click="callColor(item)"></button>
    </div>
</template>

<script>
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
            }
        }
    },
    methods: {
        callColor(item) {
            console.log(this.$root.bColor)
            this.$root.bColor = item
        }
    },
}
</script>

<style>
.color-btn {
    margin: 5px;
    height: 30px;
}
</style>