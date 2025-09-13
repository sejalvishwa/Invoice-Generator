<script>
import AppNavbar from '../components/AppNavbar.vue'
import HeroSection from '../components/HeroSection.vue'
import LandingPageContent from '../components/LandingPageContent.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  components: {
    AppNavbar ,
    HeroSection,
    LandingPageContent,
    AppFooter,
  }
}
</script>

<template>    
<AppNavbar/>
<HeroSection/>
<LandingPageContent/>
<AppFooter/>
</template>

<style>
</style>