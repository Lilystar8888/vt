<template>
  <!-- Container for demo purpose -->
  <MDBContainer class="my-5 py-5">
    <h1 class="h5 text-center py-5 mb-0">User profile</h1>

    <!--Section: Content-->
    <section>
      <MDBRow>
        <MDBCol md="8" class="mb-4 mb-md-0">
          <MDBCard class="mb-4">
            <MDBCardHeader class="py-3">
              <strong>Edit profile</strong>
            </MDBCardHeader>
            <MDBCardBody text="center">
              <div class="mb-3">
                <strong>Profile photo</strong>
              </div>

              <form action="">
                <div class="d-flex justify-content-center mb-4">
                  <MDBFileUpload
                    :defaultFiles="[
                      'https://mdbootstrap.com/img/new/avatars/1.jpg',
                    ]"
                    style="max-width: 300px"
                    class="shadow-1"
                  />
                </div>

                <MDBInput
                  type="text"
                  v-model="formName"
                  label="Name"
                  wrapperClass="mb-4"
                />
                <MDBInput
                  type="email"
                  v-model="formEmail"
                  label="Email"
                  wrapperClass="mb-4"
                />
                <MDBInput
                  type="text"
                  v-model="formPosition"
                  label="Position"
                  wrapperClass="mb-4"
                />
                <MDBTextarea
                  v-model="formDescription"
                  label="Description"
                  wrapperClass="mb-4"
                />

                <MDBBtn color="primary" class="mb-2"> Update profile </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardHeader class="py-3"
              ><strong>Change password</strong></MDBCardHeader
            >
            <MDBCardBody class="text-center pt-4">
              <form action="">
                <MDBInput
                  type="passwordd"
                  v-model="newPassword"
                  label="New password"
                  wrapperClass="mb-4"
                />
                <MDBInput
                  type="passwordd"
                  v-model="confirmPassword"
                  label="Confirm password"
                  wrapperClass="mb-4"
                />

                <MDBBtn color="primary" class="mb-2"> Apply </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <div class="col-md-4 mb-4 mb-md-0">
          <MDBCard>
            <MDBCardBody class="text-center">
              <img
                class="rounded-circle shadow-1 mb-3"
                src="https://mdbootstrap.com/img/new/avatars/1.jpg"
                alt="avatar"
                style="width: 150px"
              />

              <p class="mb-1"><strong>John Doe</strong></p>
              <p class="mb-2"><small>Founder</small></p>
              <p class="mb-2 text-muted">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                deserunt pariatur voluptatem consequuntur! Aliquid, placeat
                nobis odit delectus ad est, nemo repudiandae possimus
                repellendus voluptas debitis, numquam modi asperiores beatae?
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBRow>
    </section>
    <!--Section: Content-->
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
  MDBInput,
  MDBTextarea,
  MDBBtn,
} from "mdb-vue-ui-kit";
import { MDBFileUpload } from "mdb-vue-file-upload";
import { ref } from "vue";

export default {
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBInput,
    MDBTextarea,
    MDBBtn,
    MDBFileUpload,
  },
  setup() {
    const formName = ref("John Doe");
    const formEmail = ref("johndoe@gmail.com");
    const formPosition = ref("Founder");
    const formDescription = ref(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ullam nihil impedit. Porro minus nemo nobis maiores numquam tempora architecto a, nisi consectetur, expedita illum, debitis aliquam incidunt molestias eveniet"
    );

    const newPassword = ref("");
    const confirmPassword = ref("");

    return {
      formName,
      formEmail,
      formPosition,
      formDescription,
      newPassword,
      confirmPassword,
    };
  },
};
</script>
