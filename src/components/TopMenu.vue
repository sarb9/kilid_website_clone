<template>
        <nav class="topMenu">
            <button class="topMenuMobileToggler" @click="toggleMobileMenu()">
                <i class="material-icons" v-if="openMobileMenu">close</i>
                <i class="material-icons" v-else>menu</i>    
            </button>
            <ul class="topMenuList">
                <li><router-link to="/" class="menuLink logoLink">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Kilid-eng-logo.png" alt="kilid-logo">
                </router-link></li>
                <li><router-link to="/" class="menuLink">خرید</router-link></li>
                <li><router-link to="/" class="menuLink">رهن و اجاره</router-link></li>
                <li><router-link to="/" class="menuLink">جستجو روی نقشه </router-link></li>
                <li><router-link to="/" class="menuLink">ثبت رایگان آگهی</router-link></li>
                <li><router-link to="/" class="menuLink">قیمت خانه شما</router-link></li>
                <li><router-link to="/" class="menuLink">اطلاعات بازار مسکن</router-link></li>
                <li><router-link to="/" class="menuLink">آژانس های املاک</router-link></li>
                <li><router-link to="/" class="menuLink">سامانه مشاورین</router-link></li>
                <li><router-link to="/auth" class="menuLink authLink">ورود / ثبت نام</router-link></li>
            </ul>
            <ul class="topMenuListMobile" v-if="openMobileMenu">
                <li><router-link to="/" class="menuLink logoLink">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Kilid-eng-logo.png" alt="kilid-logo">
                </router-link></li>
                <li><router-link to="/" class="menuLink">خرید</router-link></li>
                <li><router-link to="/" class="menuLink">رهن و اجاره</router-link></li>
                <li><router-link to="/" class="menuLink">جستجو روی نقشه </router-link></li>
                <li><router-link to="/" class="menuLink">ثبت رایگان آگهی</router-link></li>
                <li><router-link to="/" class="menuLink">قیمت خانه شما</router-link></li>
                <li><router-link to="/" class="menuLink">اطلاعات بازار مسکن</router-link></li>
                <li><router-link to="/" class="menuLink">آژانس های املاک</router-link></li>
                <li><router-link to="/" class="menuLink">سامانه مشاورین</router-link></li>
                <li><router-link to="/auth" class="menuLink authLink">ورود / ثبت نام</router-link></li>
            </ul>    
        </nav>

</template>

<script>
export default {
    name : "TopMenu",
    data() {
        return {
            openMobileMenu : false,
        }
    },
    methods : {
        toggleMobileMenu() {
            this.openMobileMenu = !this.openMobileMenu;
        }
    }  
}
</script>

<style scoped>

.topMenu {
    width:100%;
    height:60px;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content: center;
    position:fixed;
    top:0;
    z-index:99999;
}

.topMenuList {
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    list-style: none;
}

.menuLink {
    transition: color .2s ease-in-out;
}

.menuLink:hover {
    color: #b30753;
}

.topMenuList:first-child {
    margin-right:10px;
}

.topMenuList:last-child {
    margin-left:10px;
}

.logoLink img {
    max-width:150px;    
}

.authLink {
    background-color: #b30753;
    border-radius:20px;
    padding:10px; 
    color:white;
}

.topMenuListMobile {
    display:none;
}

.topMenuMobileToggler {
    display: none;
    background:none;
    border:none;
    color: #b30753;
    cursor:pointer;
}

@media only screen and (max-width:1140px) {
    .topMenu {
        flex-direction:column;
        align-items:flex-start;
        justify-content: flex-start;
        height:auto;
    }

    .topMenuList {
        display:none;
    }

    .topMenuMobileToggler {
        display:flex;
        align-items:center;
        justify-content:center;
        margin: 15px 10px;
    }

    .topMenuListMobile {
        display: flex;
        background-color:white;
        align-items:flex-start;
        justify-content: flex-start;
        flex-direction:column;
        list-style: none;
        width:100%;
        height:100vh;
    }

    .topMenuListMobile li {
        margin:10px;
        align-self:stretch;
        padding-bottom:10px;
    }

    .topMenuListMobile li:not(:last-child) {
        border-bottom:1px solid #eee;
    }
}
</style>