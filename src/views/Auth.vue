<template>
    <main>
        <div class="loginWrapper">
            <router-link to="/" class="closeButton"><i class="material-icons">close</i></router-link>
            <div class="rightPattern"></div>
            <div class="formWrapper" v-if="loginIsShown">
                <h2>
                    <button class="toggleButton" :class="{'active' : loginIsShown}" @click="showLoginForm()">ورود</button>
                    <button class="toggleButton" :class="{'active' : !loginIsShown}" @click="showRegisterForm()">ثبت نام</button>
                </h2>
                <form @submit.prevent="login">
                    <input v-model="inputLoginData.username" type="text" class="formInput" placeholder="نام کاربری">
                    <input v-model="inputLoginData.password" type="password" class="formInput" placeholder="رمز عبور">
                    <p>
                        رمز خود را 
                        <a href="#">فراموش کرده اید؟</a>
                    </p>
                    <input type="submit" class="submitInput" value="ارسال">
                </form>
                <form @submit.prevent="logout">
                    <input type="submit" class="submitInput" value="خروج">
                </form>
            </div>
            <div class="formWrapper" v-else>
                <h2>
                    <button class="toggleButton" :class="{'active' : loginIsShown}" @click="showLoginForm()">ورود</button>
                    <button class="toggleButton" :class="{'active' : !loginIsShown}" @click="showRegisterForm()">ثبت نام</button>
                </h2>
                <form @submit.prevent="register">
                    <input v-model="inputRegisterData.name" type="text" class="formInput" placeholder="نام">
                    <input v-model="inputRegisterData.username" type="text" class="formInput" placeholder="نام کاربری">
                    <input v-model="inputRegisterData.email" type="text" class="formInput" placeholder="شماره موبایل یا ایمیل">
                    <input v-model="inputRegisterData.password" type="password" class="formInput" placeholder="رمز عبور">
                    <p>
                        ثبت نام به معنی رعایت 
                        <a href="#">قوانین و مقررات</a>
                        است
                    </p>
                    <input type="submit" class="submitInput" value="ارسال">
                </form>

            </div>
        </div>
    </main>
</template>

<script>
import axios from "axios";

export default {
    name : "Auth",
    data() {
        return {
            loginIsShown : true,
            inputLoginData: {
                emailOrPhone : '',
                password : ''
            },
            inputRegisterData: {
                firstName : '',
                lastName : '',
                emailOrPhone : '',
                password : '' 
            }
        }
    },
    methods : {
        showRegisterForm() {
            this.loginIsShown = false
        },
        showLoginForm() {
            this.loginIsShown = true;
        },
        register(e) {
            e.preventDefault();
            const url = "http://127.0.0.1:8000/accounts/signup";

            let data = {
                username: this.inputRegisterData.username,
                password: this.inputRegisterData.password,
                email: this.inputRegisterData.email,
                name: this.inputRegisterData.name
            };

            axios.post(url, data).then(res => {
                console.log(res.data)
            });
        },
        login(e) {
            e.preventDefault();
            const url = "http://127.0.0.1:8000/accounts/signin";

            let data = {
                username: this.inputLoginData.username,
                password: this.inputLoginData.password
            };

            axios.post(url, data).then(res => {
                console.log(res.data)
            });
        },
        logout(e) {
            e.preventDefault();
            const url = "http://127.0.0.1:8000/accounts/username";

            axios.get(url).then(res => {
                console.log(res.data)
            });
        }
    }
}
</script>

<style scoped>
    main {
    width:100%;
    height:100vh;
    background : url(https://www.kilidstatic.com/kilid-portal-web/landing-images/home-page-landing-background-min.jpg) center no-repeat;
    background-size:cover;
    
    display:flex;
    align-items:center;
    justify-content:center;
}

.loginWrapper {
    width:50%;
    height:500px;
    border-radius:15px;
    display:flex;
    align-items:stretch;
    position:relative;
}

.rightPattern {
    background-color: #b30753;
    width:25%;
    border-radius:0 15px 15px 0;
}

.formWrapper {
    background-color:white;
    width:75%;
    border-radius:15px 0 0 15px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;

}

.closeButton {
    width:30px;
    height:30px;
    border-radius:50%;
    border:2px solid #333;
    background-color: #999;
    color:white;
    position:absolute;
    right:-15px;
    top:-15px;
    display:flex;
    align-items:center;
    justify-content:center;
}

.formWrapper h2 {
    align-self: flex-start;
    margin-right: 30px;
    margin-top: 30px;
}

.toggleButton{
    color: #999;
    margin-right:10px;
    border:none;
    border-right:1px solid #999;
    cursor:pointer;
    background:none;
    font-size:17px;
    padding-right:10px;
    padding-left:10px;
}
.toggleButton.active{
    color: #b30753;
    border-right-color: #b30753;
}

.formWrapper form {
    display: flex;
    flex-direction: column;
    margin: 30px;
    width: 80%;
}

.formWrapper form p {
    margin-top:15px;
    margin-bottom:15px;
    text-align:center;
}

.formWrapper form p a {
    color: #517cfb;
}

.formInput {
    border-radius: 5px;
    border: 1px solid #999;
    padding: 10px;
    margin-top: 10px;
    width: 100%;
}

.submitInput {
    background-color : #b30753;
    color:white;
    border-radius:10px;
    padding:10px 25px;
    border:none;
    align-self:center;
    cursor:pointer;
    box-shadow:0 0 10px rgba(0,0,0,0.2);
}
</style>