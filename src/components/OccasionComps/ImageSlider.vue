<template>
    <div class="imageSliderWrapper"> 
            <div class="shownImage" :style="'background-image:url(' + selectedImage + ')'">
                <span class="imageSlider-counter">
                    {{this.selectedIndex + 1}}
                    /
                    {{this.images.length}}
                </span>
                <button class="imageSlider-action" @click="goNextImage()">
                    <i class="material-icons">keyboard_arrow_right</i>
                </button>
                <button class="imageSlider-action" @click="goPrevImage()">
                    <i class="material-icons">keyboard_arrow_left</i>
                </button>
            </div>
            <div class="imageSlider-thumbnails">
                <div v-for="(image,index) in images"
                :key="index"
                :style="'background-image: url(' + image + ')'" 
                class="imageSlider-thumbnail"
                @click="showMe(index)"
                >
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name : "ImageSlider",
    props : {
        images : {
            type : Array,
        }
    },
    data() {
        return {
            selectedImage : {}
        }
    },
    created() {
        this.selectedImage = this.images[0];
    },
    computed: {
        selectedIndex : function() {
            return this.images.indexOf(this.selectedImage);
        }
    },
    methods: {
        goNextImage() {
            if(this.selectedIndex == this.images.length - 1) {
                this.selectedImage = this.images[0];
            }else {
                this.selectedImage = this.images[this.selectedIndex + 1];
            }
        },
        showMe(index) {
            this.selectedImage = this.images[index];
        },
        goPrevImage() {
            if(this.selectedIndex == 0) {
                this.selectedImage = this.images[this.images.length - 1];
            }else {
                this.selectedImage = this.images[this.selectedIndex - 1];
            }
        }
    }

}
</script>

<style scoped>
.imageSliderWrapper {
    width:100%;
    border-radius:10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    min-height:550px;
    margin-top:20px;
}

.shownImage {
    height:370px;
    border-radius:10px 10px 0 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:relative;
}

.imageSlider-action {
    background:none;
    border:none;
    color: rgba(0,0,0,0.6);
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    width:60px;
    height:60px;
}

.imageSlider-action i.material-icons {
    font-size:50px;
}

.imageSlider-thumbnails {
    width:100%;
    height:200px;
    margin-top:5px;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    flex-wrap:wrap;
}
.imageSlider-thumbnail {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    align-self:stretch;
    width:calc(25% - 7px);
    margin-left:5px;
    cursor:pointer;
}

.imageSlider-thumbnail:first-child {
    border-bottom-right-radius: 10px;
    margin-right:5px;
}

.imageSlider-thumbnail:last-child {
    border-bottom-left-radius:10px;
}

.imageSlider-counter {
    position:absolute;
    top:10px;
    right:10px;
    padding:5px 15px;
    border-radius:15px;
    color:white;
    background-color: rgba(0,0,0,0.4);
    direction:ltr;
}
</style>