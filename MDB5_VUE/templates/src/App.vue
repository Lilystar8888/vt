<template>
  <SideNav />
  <main style="margin-top: 58px">
    <MDBContainer class="mt-5 px-lg-5">
      <router-view />
    </MDBContainer>
  </main>
</template>

<script>
import SideNav from "@/components/SideNav.vue";
import { MDBContainer } from "mdb-vue-ui-kit";
export default {
  components: { SideNav, MDBContainer },
};
</script>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

@media (min-width: 1400px) {
  main {
    padding-left: 240px;
  }
}
</style>