<template>
    <div class="p-2">
        <input ref="refInput" type="file" multiple hidden="hidden" accept=".png, .jpg, .svg" @change="onInputChange">
        <div class="continue_button" >
            <a type="#" @click="fileUpload">Upload file</a>
        </div>

        <div class="row p-0 m-0">
            <div class=" col-6 p-0 m-0" v-for="(item, k) of $root.inputImages" :key="k" >
                <div class=" img-btn" 
                @click="$root.bgImg = fileToImage(item)"
                :style="{
                    height: '100px',
                    width: '100%',
                    backgroundImage : `url(${fileToImage(item)})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    }">
                </div>
                <button class="delete-btn" @click="deleteBtn(k)">&times</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        fileUpload() {
            this.$refs.refInput.click()
        },
        onInputChange(e) {
            if(e.target.files){
                // for(let item of e.target.files) {
                //     this.inputImages.push([item])
                // }
                Array.from(e.target.files).map( item => this.$root.inputImages.push(item))
            }
        },
        fileToImage(item) {
            if(item) {
                return URL.createObjectURL(item) 
            }
        },
        deleteBtn(item) {
            this.$root.inputImages.splice(item, 1)
        }
    },
}
</script>

<style>
.img-btn {
    cursor: pointer;
}
.delete-btn{
    position: absolute;
    width: 100%;
    right: 0;
    top: 0;
    color: transparent;
    font-size: 20px;
}
.delete-btn:hover {
    background: rgba(0, 0, 0, 0.329);
    color: white;
}
</style>