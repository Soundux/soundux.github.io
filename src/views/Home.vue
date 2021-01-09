<template>
  <Banner/>
  <hr/>
  <Features/>
  <hr/>
  <FeatureList/>
  <hr/>
  <Screenshots/>
  <hr/>
  <Download/>
</template>

<script>
import Banner from "../components/Banner.vue";
import Features from "../components/Features.vue";
import FeatureList from "../components/FeatureList.vue";
import Screenshots from "../components/Screenshots.vue";
import Download from "../components/Download.vue";

export default {

  name: "Home",
  components: {
    Download,
    Screenshots,
    FeatureList,
    Banner,
    Features
  },
}
</script>
