<template>
  <div class="home">
    <Nation />
  </div>
</template>

<script>
// @ is an alias to /src
import Nation from "@/components/Nation.vue";

export default {
  name: "Home",
  components: {
    Nation,
  }
};
</script>
