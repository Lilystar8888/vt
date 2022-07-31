<template>
  <!-- Container for demo purpose -->
  <MDBContainer class="my-5 py-5">
    <MDBRow class="d-flex justify-content-center">
      <MDBCol md="6">
        <MDBCard text="center">
          <MDBCardHeader class="p-4"
            ><h5 class="mb-0">
              <strong>Change Password</strong>
            </h5></MDBCardHeader
          >
          <MDBCardBody class="p-4">
            <p class="mb-4">Set a new password</p>

            <form action="" class="mb-4">
              <MDBInput
                type="password"
                v-model="newPassword"
                label="New password"
                wrapperClass="mb-4"
              />
              <MDBInput
                type="password"
                v-model="confirmPassword"
                label="Confirm password"
                wrapperClass="mb-4"
              />

              <MDBBtn color="primary">Apply</MDBBtn>
            </form>

            <div class="d-flex justify-content-between align-items-center mb-2">
              <u><a href="">Back to Log In</a></u>

              <u><a href="">Register</a></u>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <!-- Container for demo purpose -->
</template>

<script>
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBBtn,
    MDBInput,
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
