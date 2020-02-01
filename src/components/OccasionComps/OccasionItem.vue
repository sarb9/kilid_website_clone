<template>
    <router-link class="occasionBox" :to="'/occasion/' + occasionItem.id">
                <div class="occasionBox-header" :style="'background-image: url(' + occasionItem.pic.image + ')'">
                    <button class="occasionBox-header--star" v-if="occasionItem.star">
                        <i class="material-icons">star</i>
                    </button>

                    <button class="occasionBox-header--bookmark" v-if="occasionItem.bookmarked">
                        <i class="material-icons">bookmark_border</i>
                    </button>

                    <button class="occasionBox-header--camera">
                        <span class="occasionBox-header--camera-number">{{occasionItem.pic.number}}</span>
                        <i class="material-icons">photo_camera</i>
                    </button>

                    <div class="occasionBox-header--info">
                        <p class="occasionBox-header--info-locality">{{occasionItem.location.locality}}</p>
                        <p classs="occasionBox-header--info-title">{{occasionItem.title}}</p>
                    </div>
                </div>
                
                <div class="occasionBox-meta">
                    <p class="occasionBox-meta-item">
                        {{getJalaliUnix(occasionItem.created_at).locale('fa').fromNow()}}
                    </p>
                    <p class="occasionBox-meta-item">
                        {{occasionItem.bedrooms}} خوابه
                    </p>
                    <p class="occasionBox-meta-item">
                        {{occasionItem.area}} متر
                    </p>
                    <p class="occasionBox-meta-item">
                        {{occasionItem.type}}
                    </p>
                </div>

                <div class="occasionBox-data">
                    <div class="occasionBox-data-price">
                        <p>
                            قیمت :
                            <span class="occasionBox-data-price-big">
                                {{occasionItem.price | numFormat}}
                                تومان
                            </span>
                        </p>
                        <p>
                            متر مربع :
                            <span class="occasionBox-data-price-big">
                                {{pricePerMeter | numFormat}}
                                تومان
                            </span>  
                        </p>
                    </div>
                    <div class="occasionBox-data-logo">
                        <img :src="occasionItem.estate.logo" alt="">
                        <p>{{occasionItem.estate.name}}</p>
                    </div>
                </div>    
            </router-link>
   
</template> 

<script>
import jalali from 'jalali-moment'
export default {
    name : "OccasionItem",
    props : {
        occasionItem : {}
    },
    computed : {
        pricePerMeter : function() {
            return this.occasionItem.price  / this.occasionItem.area;
        }
    },
    methods : {
        getJalali: function(date) {
            return jalali(date);
        },
        getJalaliUnix: function(timeStampInSeconds) {
            return jalali.unix(timeStampInSeconds);
        }
    }      
}
</script>

<style scoped>
.occasionBox {
    width:350px;
    height:300px;
    margin-top:10px;
    margin-bottom:10px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    flex-direction:column;
    border-radius:10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
}


.occasionBox-header {
    width:100%;
    height:180px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius:10px 10px 0 0;
    position:relative;
}

.occasionBox-header--star {
   position:absolute;
   right:0;
   top:10px;
   border-radius:10px 0 0 10px;
   background-color: orange;
   box-shadow : 0 0 10px rgba(0,0,0,0.4);
   border:none;
   color:white;
   width:35px;
   height:35px;
   display:flex;
   align-items:center;
   justify-content:center;

}

.occasionBox-header--star i.material-icons {
    font-size:20px;
}

.occasionBox-header--bookmark {
    position:absolute;
    left:7px;
    top:10px;
    background:none;
    border:none;
    color:black;
    width:35px;
    height:35px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
}
 
.occasionBox-header--bookmark i.material-icons {
    font-size:35px;
}
 

.occasionBox-header--camera {
    position:absolute;
    left:16px;
    bottom:10px;
    background:none;
    border:none;
    color:white;
    width:35px;
    height:35px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
}
 
.occasionBox-header--camera i.material-icons {
   font-size:30px;
}


.occasionBox-header--camera-number {
    margin-left:5px;
}
 

.occasionBox-header--info {
    position:absolute;
    right:10px;
    bottom:5px;
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    flex-direction:column;
    color:white;
}

.occasionBox-header--info-locality {
    font-size:15px;
    margin-bottom:10px;
}
.occasionBox-header--info-title {
    font-size:17px;
    font-weight:bold;
}

.occasionBox-meta {
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:25px;
    background-color:#f1f1f1;
    border-bottom:1px solid #ccc;
}

.occasionBox-meta-item {
    font-size:12px;
    align-self:stretch;
    display:flex;
    align-items:center;
    justify-content:center;
    width:25%;
}

.occasionBox-meta-item:not(:last-child) {
    border-left:1px solid #ccc;
}

.occasionBox-data {
    width:100%;
    height:95px;
    border-radius:0 0 10px 10px;

    display:flex;
    align-items:center;
    justify-content:space-around;
}


.occasionBox-data-logo{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}

.occasionBox-data-logo img{
    width:40px;
    height:40px;
    border-radius:50%;
    margin-bottom:10px;
}

.occasionBox-data-logo p {
    font-size:10px;
}


.occasionBox-data-price {
    font-size:12px;
}

.occasionBox-data-price p:last-child {
    margin-top:10px;
}

.occasionBox-data-price-big {
    font-size:17px;
}
</style>