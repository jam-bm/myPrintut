<template>
    <div class="p-2">
        <button v-for="item in colors" :style="[{backgroundColor: item}, 'width : 30px', 'height : 30px']"></button>
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
</style>