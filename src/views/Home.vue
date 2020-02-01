<template>
  <div>
    <TopMenu></TopMenu>
    <HeroHeader></HeroHeader>
    <main>
      <MaskanEvaluate></MaskanEvaluate>
      <MagSection></MagSection>
      <OccasionSection></OccasionSection>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroHeader from "@/components/HeroHeader";
import MaskanEvaluate from "@/components/MaskanEvaluate";
import MagSection  from "@/components/MagComps/MagSection";
import OccasionSection from '@/components/OccasionComps/OccasionSection';
import TopMenu from '@/components/TopMenu'

export default {
  name: "home",
  components: {
    TopMenu,
    HeroHeader,
    MaskanEvaluate,
    MagSection,
    OccasionSection
  }
};
</script>


<style scoped>

main {
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}

</style>