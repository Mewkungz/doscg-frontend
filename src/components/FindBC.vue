<template>
  <div>
    <input
      v-model="value"
      @keypress="isNumber($event)"
      @keyup="getData(value)"
    />
    <br />
    <span>Input A: {{ result.data[0] }}</span
    ><br />
    <span>Input B: {{ result.data[1] }}</span
    ><br />
    <span>Input C: {{ result.data[2] }}</span>
  </div>
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
      value: 21,
    };
  },
  methods: {
    getData: async function(values) {
      values = this.value;
      this.result = await axios.get(`/api/findvalue/value=` + values);
      console.log(this.result.data);
    },
  },
  created() {
    this.getData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
