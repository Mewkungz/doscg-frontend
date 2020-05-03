<template>
  <div>
    <br /><span>Best way to go to Central World from SCGBangsue</span>
    <br /><span>Start: {{ result[0].start_address }}</span> <br /><span
      >End: {{ result[0].end_address }}</span
    >
    <br /><span>Distance: {{ result[0].distance.text }}</span> <br /><span
      >Time: {{ result[0].duration.text }}</span
    >
    <br />
    <br><span>Routes</span><br>
    <ul>
      <li v-for="items in result[0].steps" :key="items">
        <p v-html="items"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "map",
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
      let res = await axios.get(`/api/findmap`);
      this.result = res.data.routes
        .map((x) =>
          x.legs.map((y) => ({
            start_address: y.start_address,
            end_address: y.end_address,
            distance: y.distance,
            duration: y.duration,
            steps: y.steps.map((z) => z.html_instructions),
          }))
        )
        .flat();
      console.log(this.result);
    },
  },
  created() {
    this.getData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
