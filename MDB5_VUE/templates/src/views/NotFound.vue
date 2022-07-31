<template>
  <!-- Container for demo purpose -->
  <MDBContainer class="my-5 py-5">
    <MDBRow>
      <!-- Grid column -->
      <MDBCol col="12">
        <!--Section: Block Content-->
        <section class="my-5 text-center">
          <h1 class="display-1">404</h1>

          <h4 class="mb-4">Page not found</h4>

          <p class="mb-0">
            The Page you are looking for doesn't exist or an other error
            eccured.
          </p>
          <p class="mb-4">
            Go back, or ahead over to example.com to choose a new direction.
          </p>
          <a class="btn btn-primary" href="#!" role="button"
            >Go back to the homepage</a
          >
        </section>
        <!--Section: Block Content-->
      </MDBCol>
      <!-- Grid column -->
    </MDBRow>
  </MDBContainer>
  <!-- Container for demo purpose -->
</template>

<script>
import { MDBContainer, MDBRow, MDBCol } from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
  },
  setup() {
    const newPassword = ref("");
    const confirmPassword = ref("");

    return {
      newPassword,
      confirmPassword,
    };
  },
};
</script>
