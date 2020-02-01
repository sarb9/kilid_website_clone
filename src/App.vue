<template>
  <div>
    <TopMenu></TopMenu>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import TopMenu from '@/components/TopMenu'
import Footer from '@/components/Footer'
export default {
  name : "App",
  components : {
    TopMenu,
    Footer
  }
}
</script>

<style>
  body {
    direction : rtl;
}

a {
    text-decoration : none;
    color: black;
}
</style>
