<template>
    <section class="occasionWrapper" id="occasionWrapper">

            <h2 class="occasionTitle">
                {{occasionSectionTitle}}
            </h2>
            
            <OccasionItem v-for="(item, index) in occasionItems" :occasionItem="item" :key="index"></OccasionItem>

            <div class="moreOccasionButton">
                <button @click="loadMoreOccasions()" v-if="!moreOccasionsCalled">{{moreButtonInfo.text}}</button>
            </div>
        </section>
    
</template>

<script>
import axios from 'axios'
import OccasionItem from '@/components/OccasionComps/OccasionItem'
export default {
    name : "OccasionSection",
    components : {
        OccasionItem
    },
    data() {
        return {
            occasionItems : [],
            occasionSectionTitle : "",
            moreButtonInfo : {},
            moreOccasionsCalled : false,
        }
    },
    methods : {
        getOccasions() {
            axios({
                url : "http://hallows.ir/occasion",
                method : "GET"
            }).then(response => {
                console.log(response);
                this.occasionSectionTitle = response.data.section;
                this.occasionItems = response.data.items;
                this.moreButtonInfo = response.data.action;
            }).catch(error => {
                console.log(error);
            })
        },
        loadMoreOccasions() {
            axios({
                url : this.moreButtonInfo.url,
                method : "GET"
            }).then(response => {
                console.log(response);
                for(let item of response.data.items) {
                    this.occasionItems.push(item);
                }
                this.moreOccasionsCalled = true;
            }).catch(error => {
                console.log(error);
            })
        }
    },
    created() {
        this.getOccasions();
    }
}
</script>

<style scoped>
.occasionWrapper {
    width: 90%;
    margin-top:30px;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-wrap:wrap;
    padding-bottom:50px;
}



.occasionTitle {
    width: 100%;
    text-align:center;
    color : #b30753;
    margin-bottom:20px;
}

.moreOccasionButton {
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:20px;
    width:100%;
}

.moreOccasionButton button {
    border-radius: 5px;
    color: #b30753;
    align-self: center;
    box-shadow: 0 0px 7px rgba(0,0,0,0.2);
    transition: all .2s ease-in-out;
    padding: 10px 15px;
    cursor:pointer;
    background:white;
    border:none;
    margin-top: 30px;
}

.moreOccasionButton button:hover {
    background-color: #b30753;
    color: white;
}

</style>