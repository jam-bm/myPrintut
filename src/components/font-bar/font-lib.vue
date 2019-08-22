<template>
    <div>
        <div v-for="n in images" :key="n">
            <button @click="setBgImg(n)">
                <img :src="n" alt="">
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                require('@/assets/img/download.jpg'),
                require('@/assets/img/images.jpg'),
                require('@/assets/img/1.jpg')
            ]
        }
    },
    methods: {
        setBgImg(n) {
            this.$root.bgImg = n
            this.$root.bgPtrn = ''
            localStorage.removeItem('bgPtrn')
            localStorage.setItem('bgImg', JSON.stringify(this.$root.bgImg))
        }
    }
}
</script>

<style scoped>
    img{
        padding: 2px;
        width: 100%;
        z-index: 10000;
        
        height: auto
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
        margin: auto;
        display: block;
    }
</style>
