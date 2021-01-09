<template>
  <main class="flex flex-col justify-center my-5 mx-16 xl:mx-96">
    <router-view/>
  </main>
</template>

<script>

export default {
  name: "App",
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
