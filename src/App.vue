<template>
  <div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  name : "App",
  components : {
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
