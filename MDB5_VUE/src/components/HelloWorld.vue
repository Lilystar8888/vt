<template>
  <MDBContainer>
    <div
      class="d-flex justify-content-center align-items-center"
      style="height: 100vh"
    >
      <div class="text-center">
        <img
          class="mb-4"
          src="https://mdbootstrap.com/img/logo/mdb-earlyaccess.png"
          style="width: 400px; height: 190px"
        />
        <h5 class="mb-3">{{ msg }}</h5>
        <p>
          This Early Access grants you access to a UI Kit that is still under
          development.
        </p>
        <p>
          The schedule for all upcoming features can be found in
          <a href="https://mdbootstrap.com/docs/b5/roadmap/">release roadmap</a
          >.
        </p>
        <p class="mb-3">MDB Team</p>
        <a
          class="btn btn-primary btn-lg"
          href="https://mdbootstrap.com/docs/b5/vue/pro/installation/"
          target="_blank"
          role="button"
          >Start using MDB</a
        >
      </div>
    </div>
  </MDBContainer>
</template>

<script>
import { MDBContainer } from "mdb-vue-ui-kit";

export default {
  name: "HelloWorld",
  components: {
    MDBContainer
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
