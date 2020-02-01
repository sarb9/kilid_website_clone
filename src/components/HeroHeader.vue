<template>
  <header>
    <section class="heroHeader">
      <section class="middleContainer">
        <h1>کیلید. سامانه هوشمند مسکن</h1>
        <div class="actionButtons">
          <a href class="active">خرید</a>
          <a href>رهن و اجاره</a>
          <a href>قیمت خانه شما؟</a>
        </div>
        <div class="searchBox">
          <div class="searchInput">
            <label for="citySelection">
              <i class="material-icons">gps_fixed</i>
              <select name="citySelection" id="citySelection">
                <option value="tehran" selected>تهران</option>
                <option value="shiraz">شیراز</option>
              </select>
            </label>
            <input type="text" placeholder="نام محله. منطقه و ایستگاه مترو" />
          </div>
          <button class="searchButton">
            <i class="material-icons">search</i>
          </button>
        </div>
        <a href class="advancedSearchLink">جستجوی پیشرفته</a>
        <button class="goDownButton">
          <i class="material-icons">keyboard_arrow_down</i>
        </button>
      </section>
    </section>
  </header>
</template>

<script>
export default {
  name: "HeroHeader"
};
</script>

<style scoped>
    .heroHeader {
    height:calc(100vh - 60px);
    background : url(https://www.kilidstatic.com/kilid-portal-web/landing-images/home-page-landing-background-min.jpg) center no-repeat;
    background-size : cover;
    margin-top:60px;


    display:flex;
    align-items:center;
    justify-content:center;
}

.middleContainer {
    height:300px;
    width:45%;

    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: flex-start;
}

.middleContainer h1 {
    font-size:30px;
}

.actionButtons {
    align-self:stretch;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:20px;
}

.actionButtons a {
    background-color:rgba(0,0,0,0.4);
    border-radius:20px;
    padding:10px 15px;
    color:white;
    width:calc(33% - 20px);
    text-align:center;
    margin-left:5px;
    margin-right:5px;
    transition:background-color .2s ease-in;
}

.actionButtons a.active {
    background-color: rgba(179,7,83,1);
}

.actionButtons a:hover {
    background-color:rgba(0,0,0,0.6);   
}

.searchBox {
    height:70px;
    width:100%;
    border-radius:50px;
    background-color:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:space-between;

    margin-top:20px;
    position:relative;
}

.searchButton {
    width:20%;
    margin:10px;
    background-color : rgba(179,7,83,1);
    color: white; 
    border: none;
    border-radius:50px;
    height:calc(100% - 20px);
    cursor:pointer;
}

.searchInput {
    width:80%;
    margin-left:5px;
    margin-right:10px;
    background-color:white;
    border-radius:50px;
    height:calc(100% - 20px);

    display: flex;
    align-items:center;
    justify-content:flex-start;
}

label[for="citySelection"] {
    border-left:1px solid #444;
    height:calc(100% - 10px);
    display:flex;
    align-items:center;
    width:25%;
    padding-left:5px;
}

label[for="citySelection"] i.material-icons {
    margin-right:10px;
    margin-left:10px;
}

label[for="citySelection"] select {
    background:none;
    height:100%;
    border:none;
    width:90px;
    
}

.searchInput input[type="text"] {
    margin-right:10px;
    height:calc(100% - 15px);
    border-radius:50px 0 0 50px;
    border:none; 
    width:calc(75% - 20px);
}


.advancedSearchLink {
    background-color: rgba(0,0,0,0.4);
    color:white;
    padding:5px 10px;
    border-radius:0 0 20px 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    
}


.goDownButton {
    height:40px;
    width:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    border:none;
    color:white;

    margin-top:50px;
    cursor:pointer;
    border-radius:50%;
    background-color: rgba(255,255,255,0.5);
}

@media only screen and (max-width:768px) {
  .middleContainer {
    width:100%;
  }
}

</style>