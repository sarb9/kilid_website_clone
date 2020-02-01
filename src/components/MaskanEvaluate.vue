<template>
    <section class="maskanEvaluateWrapper">
            <div class="maskanEvaluateWrapperInfo">
                <h2>بازار مسکن را ارزیابی کنید</h2>
                <p>
                 در بازار مسکن، داشتن اطلاعات و داده های دقیق «طلایی ترین فرصتها» را برای خریداران و سرمایه گذاران فراهم می کند. در کیلید این داده ها و اطلاعات پردازش شده و نتیجه پردازش در اختیار مشترکان کیلید قرار می گیرد. با تحلیل گذشته و رصد کردن امروز بازار مسکن، خانه آینده را بسازید.
                </p>
                <a href="">اطلاعات بازار مسکن</a>
            </div>
            <img src="https://www.ztoplus.com/wp-content/uploads/2019/10/realme-5-1.jpg" alt="mobile image">
        </section>    
</template>

<script>
export default {
    name : "MaskanEvaluate"
}
</script>

<style scoped>

.maskanEvaluateWrapper {
    width:90%;
    display:flex;
    justify-content:space-around;
    margin-top:50px;
    margin-bottom:50px;
}

.maskanEvaluateWrapperInfo {
    width:calc(100% - 300px);
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
}

.maskanEvaluateWrapperInfo h2 {
    color:#b30753;
}

.maskanEvaluateWrapperInfo p{
    text-align:justify;
    color: #939598;
    margin-top:30px;
}

.maskanEvaluateWrapperInfo a {
    border-radius:5px;
    color:#b30753;
    align-self:center;
    box-shadow:0 0px 7px rgba(0,0,0,0.2);
    transition:all .2s ease-in-out;
    padding:10px 15px;
    margin-top:30px;
}

.maskanEvaluateWrapperInfo a:hover {
    background-color:#b30753;
    color:white;
}

.maskanEvaluateWrapper img {
    width:300px;
}

@media only screen and (max-width:768px) {
    .maskanEvaluateWrapper {
        width:90%;
        flex-direction: column;
        align-items:center;
        justify-content: center;
    }

    .maskanEvaluateWrapperInfo {
        width:100%;
    }
}

</style>