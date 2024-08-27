<template>
  <div id="app" class="d-flex flex-column">
    <AppNavbar />
    <LogobarComponent :logos="logos" />
    <HeaderComponent />
    <SkillbarComponent />
    <GalleryComponent />
    <TestimonialComponent />
    <FooterComponent />
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";
import LogobarComponent from "./components/Logobar.vue";
import HeaderComponent from "./components/Header.vue";
import SkillbarComponent from "./components/Skillbar.vue";
import GalleryComponent from "./components/Gallery.vue";
import TestimonialComponent from "./components/Testimonial.vue"
import FooterComponent from "./components/Footer.vue"
export default {
  name: 'App',
  components: {
    AppNavbar,
    LogobarComponent,
    HeaderComponent,
    SkillbarComponent,
    GalleryComponent,
    TestimonialComponent,
    FooterComponent
  },
  data() {
    return {
      logos: ["/images/google.png", "/images/nike.png", "/images/samsung.png", "/images/apple.png", "/images/addidas.png"]
    }
  }
}
</script>

<style>
#app {
  margin-left: 1.5%;
  margin-right: 1.5%;
}
@media (max-width:1000px)
{
  #app{
    justify-content: center;
    align-items: center;
  }
}
</style>
