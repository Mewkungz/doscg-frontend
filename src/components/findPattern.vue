<template>
  <span>Result: {{ result.data }}</span>
</template>

<script>
import axios from "axios";
export default {
  name: "Pattern",
  props: {
    msg: String,
  },
  data() {
    return {
      result: [],
    };
  },
  methods: {
    getData: async function() {
      this.result = await axios.get(`/api/findpattern`);
      console.log(this.result.data);
    },
  },
  created() {
    this.getData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
