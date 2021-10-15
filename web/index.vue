<template>
  <div>{{ message }}</div>
</template>

<script>
import { hello } from "../apis/hello.js";
export default {
  data(){
    return { message: "loading..." }
  },
  mounted: async function () {
    this.message = await hello("world");
  }
};
</script>