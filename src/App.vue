<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark primary-color">
      <a class="navbar-brand" href="/">DOSCG</a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#basicExampleNav"
        aria-controls="basicExampleNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="basicExampleNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/"
              >Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/findpattern">Find Pattern</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/findBC">Find BC</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/map">Map</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/line">Line</a>
          </li>
        </ul>
      </div>
    </nav>

    <router-view></router-view>

    <footer class="page-footer font-small blue">
      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="/"> suttipong.61@hotmail.com</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
.page-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
