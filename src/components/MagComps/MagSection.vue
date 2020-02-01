<template>
    <section class="magWrapper">
            <h1>
                {{sectionTitle}}
            </h1>
            <p>
                کارشناسان کیلید، در "کیلید مگ" شما را با مهم‌ترین مسائل بازار مسکن آشنا می‌کنند. کیلید مگ، مبتنی بر بررسی‌های علمی و آماری، اخبار و تحلیل‌های آینده بازار مسکن را در اختیارتان قرار می‌دهد.
            </p>
            <div class="magItems" id="magItems">
                <MagItem v-for="magItem in magItems" :magItem="magItem" :key="magItem.id"></MagItem>
            </div>
            <a href="#" class="moreMagItemsLink">مطالب بیشتر</a>
        </section>
</template>

<script>
import MagItem from '@/components/MagComps/MagItem'
import axios from 'axios';
export default {
    name : "MagSection",
    components : {
        MagItem
    },
    data() {
        return {
            magItems : [],
            sectionTitle : '',
        }
    },
    methods : {
        getMagItems() {
            axios({
                url : "http://www.hallows.ir/mags",
                method : "GET",
            }).then(response => {
                console.log(response);
                this.sectionTitle = response.data.section;
                this.magItems = response.data.items;
            }).catch(error => {
                console.log(error);
            })
        }
    },
    created() {
        this.getMagItems();
    }    
}
</script>

<style scoped>
    .magWrapper {
    width:90%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    margin-top:50px;
    margin-bottom:50px;
}

.magWrapper h1 {
    font-size:30px;
    color : #b30753;
}


.magWrapper p {
    color: #939598;
    margin-top:30px;
}

.magItems {
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-wrap : wrap;
    margin-top:30px;
}


.moreMagItemsLink {
    border-radius:5px;
    color:#b30753;
    align-self:center;
    box-shadow:0 0px 7px rgba(0,0,0,0.2);
    transition:all .2s ease-in-out;
    padding:10px 15px;
    margin-top:30px;
}

.moreMagItemsLink:hover {
    background-color:#b30753;
    color:white;
}

</style>