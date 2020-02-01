<template>
    <footer>
            <div class="socialIconsWrapper">
                <a href="" class="socialIconLink"><i class="material-icons">email</i></a>
                <a href="" class="socialIconLink"><i class="material-icons">email</i></a>
                <a href="" class="socialIconLink"><i class="material-icons">email</i></a>
                <a href="" class="socialIconLink"><i class="material-icons">email</i></a>
            </div>
            <div class="mainFooterInfo">
                <ul class="footerHorizontalList">
                    <li><a href="">لینک۱</a></li>
                    <li><a href="">لینک۲</a></li>
                    <li><a href="">لینک۳</a></li>
                    <li><a href="">لینک۳</a></li>
                    <li><a href="">لینک۳</a></li>
                    <li><a href="">لینک۳</a></li>
                    <li><a href="">لینک۳</a></li>
                    <li><a href="">لینک۳</a></li>
                </ul>
                <ul class="footerHorizontalList">
                        <li><a href=""><img src="assets/img/ecunion-logo.png" alt=""></a></li>
                        <li><a href=""><img src="assets/img/ecunion-logo.png" alt=""></a></li>
                        <li><a href=""><img src="assets/img/ecunion-logo.png" alt=""></a></li>
                        <li><a href=""><img src="assets/img/ecunion-logo.png" alt=""></a></li>
                </ul>
                <ul class="footerHorizontalList">
                        <li><a href="">لینک۱</a></li>
                        <li><a href="">لینک۲</a></li>
                        <li><a href="">لینک۳</a></li>
                        <li><a href="">لینک۳</a></li>
                        <li><a href="">لینک۳</a></li>
                        <li><a href="">لینک۳</a></li>
                </ul>
                <a href="#" class="footerLogoLink">
                    <img src="assets/img/Kilid-eng-logo.png" alt="logo">
                </a>
                <p>
                        تهران، خیابان وزرا، کوچه نهم، پلاک 26
                        <br>
                        021-75071000
                </p>
            </div>
            <div class="mainCityInfo">
                <div class="mainCityInfoPart left">
                    <p>خرید</p>
                    <ul>
                        <li><a href="#">شهر۱</a></li>
                        <li><a href="#">شهر۱</a></li>
                        <li><a href="#">شهر۱</a></li>
                        <li><a href="#">شهر۱</a></li>
                        <li><a href="#">شهر۱</a></li>
                    </ul>
                    <ul>
                            <li><a href="#">شهر۱</a></li>
                            <li><a href="#">شهر۱</a></li>
                            <li><a href="#">شهر۱</a></li>
                            <li><a href="#">شهر۱</a></li>
                            <li><a href="#">شهر۱</a></li>
                        </ul>
                </div>
                <div class="mainCityInfoPart right">
                        <p>خرید</p>
                        <ul>
                            <li><a href="#">شهر۱</a></li>
                            <li><a href="#">شهر۱</a></li>
                            <li><a href="#">شهر۱</a></li>
                            <li><a href="#">شهر۱</a></li>
                            <li><a href="#">شهر۱</a></li>
                        </ul>
                        <ul>
                                <li><a href="#">شهر۱</a></li>
                                <li><a href="#">شهر۱</a></li>
                                <li><a href="#">شهر۱</a></li>
                                <li><a href="#">شهر۱</a></li>
                                <li><a href="#">شهر۱</a></li>
                            </ul>
                    </div>
            </div>
            <div class="copyright">
                <p>کلیه حقوق این سایت متعلق به شرکت کلان داده شهر فناوران می‌باشد</p>
                <a href="">حریم خصوصی</a>
                <a href="">شرایط استفاده</a>
            </div>
    </footer>

</template>

<script>
export default {
    name : "Footer"    
}
</script>

<style scoped>
footer {
    width:100%;
    position: relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
}

.socialIconsWrapper{
    top:-25px;
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
}

.socialIconLink{
    width:50px;
    height:50px;
    border-radius:50%;
    background-color:#464545;
    color: #999;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:2.5px;
    margin-right:2.5px;
}

.mainFooterInfo {
    background-color :#2c2c2c;
    align-self:stretch;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;

    padding-bottom:20px;
}

.footerHorizontalList {
    display:flex;
    align-items:center;
    justify-content:space-between;
    list-style: none;
    margin-top:35px;
    flex-wrap: wrap
}

.footerHorizontalList li {
    margin-left:10px;
    margin-right:10px;
}

.footerHorizontalList li a {
    color: #999;
}

.footerHorizontalList li img {
    width:80px;
    height:80px;
    border-radius:5px;
    background-color:white;
}

.footerLogoLink img{
    margin-top:20px;
    width:100px;
}


.mainFooterInfo p{
    text-align:center;
    color: #999;
    font-size:14px;
    margin-top:20px;
}

.mainCityInfo{
    padding-top:20px;
    padding-bottom:20px;
    background-color:#1e1e1e;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.mainCityInfoPart {
    width:50%;
    display:flex;
    
}

.mainCityInfoPart p{
    color: #999;
}

.mainCityInfoPart ul {
    list-style:none;
    margin-right:15px;
}

.mainCityInfoPart.left {
    justify-content:flex-end;
}

.mainCityInfoPart.right {
    justify-content:flex-start;
    margin-right:40px;
}

.mainCityInfoPart ul li a {
    color: white;
}

.copyright {
    width:100%;
    height:30px;
    background:#131313;
}

.copyright {
    display:flex;
    align-items:center;
    justify-content:center;
}

.copyright p {
    color: #333;
}

.copyright a {
    color:white;
    margin-right:20px;
}

</style>