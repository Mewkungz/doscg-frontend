<template>
  <div class="cv">
    <img src="../assets/Resume.jpg" />
  </div>
</template>

<script>
export default {
  name: "CV",
  props: {
    msg: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cv {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
</style>
