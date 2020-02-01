<template>
  <main class="houseWrapper">
    <section class="houseMetaWrapper">
      <div class="houseMetaBox">
        <div class="houseMetaItem horizontal">
          <p>کد ملک :‌ 
              {{house.id}}
          </p>
          <p>{{getJalaliUnix(house.created_at).locale('fa').fromNow()}}</p>
        </div>
        <div class="houseMetaItem">
          <h2 class="houseMetaItem-title">{{house.title}}</h2>
          <h2 class="houseMetaItem-title">
            <span class="houseMetaItem-title-label">قیمت :</span>
            {{house.price | numFormat}}
            تومان
          </h2>
          <h2 class="houseMetaItem-title">
            <span class="houseMetaItem-title-label">هر متر مربع :</span>
            {{house.price / house.area | numFormat}}
            تومان
          </h2>
        </div>

        <div class="houseMetaItem">
          <p class="houseMetaItem-info">
            <i class="material-icons">house</i>
            آپارتمان {{house.type}}
          </p>
          <p class="houseMetaItem-info">
            <i class="material-icons">single_bed</i>
            {{house.bedrooms}} خوابه
          </p>
          <p class="houseMetaItem-info">
            <i class="material-icons">square_foot</i>
            {{house.area}} متر
          </p>
          <p class="houseMetaItem-info" v-if="house.parkings == 0">
            <i class="material-icons">local_parking</i>
            بدون پارکینگ
          </p>
          <p class="houseMetaItem-info" v-else>
            <i class="material-icons">local_parking</i>
            {{house.parkings}} پارکینگ
          </p>
          
        </div>
      </div>
      <div class="houseMetaBox" v-if="house.estate != undefined">
        <div class="houseMeta-estate">
          <img
            class="houseMeta-estate-logo"
            :src="house.estate.logo"
            alt
          />
          <p class="houseMeta-estate-name">{{house.estate.name}}</p>
        </div>
        <div class="houseMeta-caller">
          <p class="houseMeta-caller-name">{{house.estate.name}}</p>
          <button class="houseMeta-caller-numberBtn" v-if="showFilteredNumber" @click="toggleShowFilterNumber()">{{filteredNumber}}</button>
          <button class="houseMeta-caller-numberBtn" v-else @click="toggleShowFilterNumber()">{{house.estate.phone}}</button>
        </div>
      </div>
    </section>

    <section class="houseDataWrapper">
      <div class="breadCrumb">
        <div class="breadCrumb-item" v-for="(item,index) in house.breadcrumb" :key="index">
            <router-link to="/" class="breadCrumb-item-link">{{item.name}}</router-link>
            <i class="material-icons breadCrumb-divider" v-if="index != house.breadcrumb.length - 1">keyboard_arrow_left</i>    
        </div>  
      </div>

      <ImageSlider v-if="house.pic" v-bind:images="house.pic.images"></ImageSlider>

        <div class="userActionWrapper">
            <button class="userActionButton">
                گزارش آگهی
                <i class="material-icons">report</i>
            </button>
            <button class="userActionButton">
                اشتراک گذاری
                <i class="material-icons">report</i>
            </button>
            <button class="userActionButton">
                ذخیره
                <i class="material-icons">report</i>
            </button>
        </div>

        <OccasionMap v-if="house.location" :lat="house.location.lat" :long="house.location.long"></OccasionMap>

        <OccasionChart style="margin-top:50px;margin-bottom:50px;"></OccasionChart>

        <OccasionChartRect style="margin-top:50px;margin-bottom:50px" > </OccasionChartRect>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import ImageSlider from '@/components/OccasionComps/ImageSlider'
import OccasionMap from '@/components/OccasionComps/OccasionMap'
import OccasionChart from '@/components/OccasionComps/OccasionChart'
import OccasionChartRect from '@/components/OccasionComps/OccasionChartRect'
import jalali from 'jalali-moment'
export default {
  name: "Occasion",
  components: {
      ImageSlider,
      OccasionMap,
      OccasionChart,
      OccasionChartRect
  },
  data() {
      return {
          house : {},
          showFilteredNumber : true,
      }
  },
  methods : {
    toggleShowFilterNumber:function () {
      this.showFilteredNumber = !this.showFilteredNumber;
    },
    getJalali : function(date) {
      return jalali(date);
    },
    getJalaliUnix: function(timeStampInSeconds) {
      return jalali.unix(timeStampInSeconds);
    }
  },
  computed : {
    filteredNumber : function() {
      let filtered = "";
        for(let i = 0 ; i < this.house.estate.phone.length ; i++) {
        if(i > 2 && i < this.house.estate.phone.length - 2 ) {
          filtered += "X"
        }else {
          filtered += this.house.estate.phone[i];
        }
      }
      return filtered;
    }
  },
  created() {
    axios({
      url: "http://hallows.ir/house/" + this.$route.params.id,
      method: "GET"
    })
      .then(response => {
        console.log(response);
        this.house = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.houseWrapper {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 60px;
  padding-top:30px;
}

.houseDataWrapper {
  width: calc(100% - 450px);
  margin-top: 5px;
  display: flex;
  flex-direction: column;
}

.houseMetaWrapper {
  width: 400px;
  position: sticky;
  top: 65px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.houseMetaBox {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  margin-bottom: 15px;
}

.houseMetaItem {
  margin: 15px;
  width: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
}

.houseMetaItem:not(:last-child) {
  border-bottom: 1px solid #ccc;
}

.houseMetaItem.horizontal {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.houseMetaItem-title {
  margin-right: 10px;
  font-size: 18px;
  margin-bottom: 15px;
}

.houseMetaItem-title-label {
  color: #aaa;
  font-size: 15px;
}

.houseMetaItem-info {
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
}

.houseMetaItem-info i.material-icons {
  margin-left: 10px;
}

.houseMeta-estate {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 10px;
  background-color: #f4f4f4;
}

.houseMeta-estate-logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.houseMeta-caller {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 10px;
  margin-top: 25px;
}

.houseMeta-caller-numberBtn {
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 12px 35px;
  border: none;
  background-color: #b30753;
  color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.breadCrumb {
  width: 100%;
  display: flex;
  align-items: center;
}

.breadCrumb-item {
    display:flex;
    align-items:center;
}

.breadCrumb-list {
  display: flex;
  align-items: center;
  padding: 10px 0;
}

.breadCrumb-divider {
  cursor: default;
}

.userActionWrapper{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    margin-top:20px;
}

.userActionButton {
    border:none;
    background:white;
    border-radius:15px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    box-shadow:0 2px 20px rgba(0,0,0,0.2);
    padding:10px 25px;
    cursor:pointer;
    margin-right:10px;
    margin-left:10px;
}

.userActionButton i.material-icons {
    margin-right:10px;
}

@media only screen and (max-width:992px) {
  .houseMetaWrapper {
    position:static;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    order:2;
    padding-bottom:30px;
  }

  .houseDataWrapper {
    width: 100%;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    order:1;
  }
}
</style>