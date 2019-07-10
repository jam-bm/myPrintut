<template>
    <div>
        <button class="btn add-text" @click="addForm">Добавить текст</button>
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
</style>
