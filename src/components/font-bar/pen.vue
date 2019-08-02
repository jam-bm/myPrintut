<template>
    <div class="row p-4">
        <button v-for="item in colors" :key="item" :style="[{background: item}]" class="color-btn col-1" @click="backColor = item"></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            colors: {
                orange: 'orange',
                pink: 'pink',
                violet: 'blueviolet',
                darkgreen: 'darkgreen',
                blue: 'blue',
                lightgreen: 'lightgreen',
                green: 'green',
                yellow: 'yellow',
                red: 'red',
                brown: 'brown',
                black: 'black',
                white: 'white'
            }
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