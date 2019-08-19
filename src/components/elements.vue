<template>
    <div>
        <div class="row">
            <button class="col-6 font-btn" v-for="item of components" :key="item" @click="activeFont(item)">{{item}}</button>
        </div>
        <br>
        <component :is="selectedComponent"></component>
    </div>
</template>

<script>
import icon from './element-bar/el-icon'
import fig from './element-bar/el-figure'
export default {
    data() {
        return {
            selectedComponent: 'fig',
            components: [
                'fig', 'icon'
            ],
        }
    },
    components: {
        fig,
        icon,
    },
    methods: {
        activeFont(item) {
            this.selectedComponent = item
        }
    },
}
</script>

<style>
.font-btn {
    color: white;
    background-color: blue;
    border: 1px solid;
    height: 50px;
    padding: 3px 0;
    opacity: 0.2;
}
.font-btn:focus {
    opacity: 1;
}
</style>

