<template>
  <div class="flex my-5 justify-center">
    <main class="flex flex-col justify-center mx-16 xl:mx-96">
      <Banner/>
      <hr />
      <Features/>
      <hr />
      <FeatureList/>
      <hr />
      <Screenshots/>
      <hr />
      <Download />
    </main>

  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Features from "./components/Features.vue";
import FeatureList from "./components/FeatureList.vue";
import Screenshots from "./components/Screenshots.vue";
import Download from "./components/Download.vue";

export default {
  name: "App",
  components: {
    Download,
    Screenshots,
    FeatureList,
    Banner,
    Features
  },
};
</script>

<style>
/*! @import */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-white dark:bg-background;
  @apply text-gray-900 dark:text-white;
}

p > a {
  @apply text-blue-500 !important;
}

hr {
  @apply border-gray-500 w-full my-5;
}

.btn {
  @apply flex items-center p-3 bg-primary rounded-md mb-3 mr-3;
  /*@apply flex items-center p-4 bg-blue-200 rounded-lg shadow-xl cursor-pointer hover:bg-blue-500 hover:text-gray-100*/
}
.btn.btn-blue {
  @apply bg-blue-500;
}
.btn:disabled {
  @apply bg-gray-500 cursor-not-allowed;
}
.btn > svg {
  @apply content-center align-middle;
}
</style>
