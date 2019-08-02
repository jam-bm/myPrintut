<template>
    <div>
        <a class="btn add-text" @click="addForm">Добавить текст</a>
    </div>
</template>
<script>
export default {
    methods: {
        addForm(){
            this.$emit('addText','lala', 'text')
        }
    },
}
</script>

<style>
.add-text {
    width: 100%;
    font-size: 20px;
    background: #dd0330;
    display: inline-block;
    line-height: 38px;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
    padding: 0 20px;
    -webkit-transition: all .5s ease-out;
    transition: all .5s ease-out;
}
</style>
