<template>
    <router-link to="/" class="magItem">
        <img :src="magItem.image" alt="">
        <div class="magItem-title">
            <h3>{{magItem.title}}</h3>
        </div>
    </router-link>
</template>

<script>
export default {
    name : "MagItem",
    props : {
        magItem : {}
    }    
}
</script>

<style scoped>
.magItem {
    width:300px;
    /* height:300px; */
    border-radius:5px;
    box-shadow:0 0 5px rgba(0,0,0,0.2);

    display:flex;
    flex-direction:column;
    align-items:center;
    transition:all .1s ease;
    margin-top:10px;
}

.magItem:hover {
    box-shadow:0 0 10px rgba(0,0,0,0.2);
}

.magItem img {
    width:100%;
    height:50%;
}

.magItem-title {
    align-self:stretch;
    font-size:13px;
    height:40px;
    padding:10px;
    display:flex;
    align-items:center;
    justify-content:center;
}

</style>