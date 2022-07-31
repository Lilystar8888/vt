<template>
  <!-- Container for demo purpose -->
  <MDBContainer class="my-5 py-5">
    <MDBRow class="d-flex justify-content-center">
      <MDBCol md="6">
        <MDBCard>
          <MDBCardBody class="p-4">
            <MDBTabs v-model="activeTab">
              <!-- Pills navs -->
              <MDBTabNav pills fill tabsClasses="mb-3">
                <MDBTabItem tabId="ex-1" href="ex-1">Login</MDBTabItem>
                <MDBTabItem tabId="ex-2" href="ex-2">Register</MDBTabItem>
              </MDBTabNav>
              <!-- Pills navs -->
              <!-- Pills content -->
              <MDBTabContent>
                <MDBTabPane tabId="ex-1">
                  <form>
                    <div class="text-center mb-3">
                      <p>Sign in with:</p>
                      <MDBBtn color="primary" floating class="mx-1">
                        <MDBIcon icon="facebook" iconStyle="fab" />
                      </MDBBtn>

                      <MDBBtn color="primary" floating class="mx-1">
                        <MDBIcon icon="google" iconStyle="fab" />
                      </MDBBtn>

                      <MDBBtn color="primary" floating class="mx-1">
                        <MDBIcon icon="twitter" iconStyle="fab" />
                      </MDBBtn>

                      <MDBBtn color="primary" floating class="mx-1">
                        <MDBIcon icon="github" iconStyle="fab" />
                      </MDBBtn>
                    </div>

                    <p class="text-center">or:</p>

                    <!-- Email input -->
                    <MDBInput
                      type="email"
                      v-model="loginName"
                      label="Email or username"
                      wrapperClass="mb-4"
                    />

                    <!-- Password input -->
                    <MDBInput
                      type="password"
                      v-model="loginPassword"
                      label="Password"
                      wrapperClass="mb-4"
                    />

                    <!-- 2 column grid layout -->
                    <MDBRow class="mb-4">
                      <MDBCol md="6" class="d-flex justify-content-center">
                        <!-- Checkbox -->
                        <MDBCheckbox
                          label="Remember me"
                          v-model="loginCheck"
                          wrapperClass="mb-3 mb-md-0"
                          checked
                        />
                      </MDBCol>

                      <MDBCol md="6" class="d-flex justify-content-center">
                        <!-- Simple link -->
                        <a href="#">Forgot password?</a>
                      </MDBCol>
                    </MDBRow>

                    <!-- Submit button -->
                    <MDBBtn color="primary" block class="mb-4">
                      Sign in
                    </MDBBtn>

                    <!-- Register buttons -->
                    <div class="text-center">
                      <p>Not a member? <a href="#">Register</a></p>
                    </div>
                  </form>
                </MDBTabPane>
                <MDBTabPane tabId="ex-2">
                  <form>
                    <div class="text-center mb-3">
                      <p>Sign up with:</p>
                      <MDBBtn color="primary" floating class="mx-1">
                        <MDBIcon icon="facebook" iconStyle="fab" />
                      </MDBBtn>

                      <MDBBtn color="primary" floating class="mx-1">
                        <MDBIcon icon="google" iconStyle="fab" />
                      </MDBBtn>

                      <MDBBtn color="primary" floating class="mx-1">
                        <MDBIcon icon="twitter" iconStyle="fab" />
                      </MDBBtn>

                      <MDBBtn color="primary" floating class="mx-1">
                        <MDBIcon icon="github" iconStyle="fab" />
                      </MDBBtn>
                    </div>

                    <p class="text-center">or:</p>

                    <!-- Name input -->
                    <MDBInput
                      type="text"
                      v-model="registerName"
                      label="Name"
                      wrapperClass="mb-4"
                    />

                    <!-- Username input -->
                    <MDBInput
                      type="text"
                      v-model="registerUsername"
                      label="Username"
                      wrapperClass="mb-4"
                    />

                    <!-- Email input -->
                    <MDBInput
                      type="email"
                      v-model="registerEmail"
                      label="Email"
                      wrapperClass="mb-4"
                    />

                    <!-- Password input -->
                    <MDBInput
                      type="password"
                      v-model="registerPassword"
                      label="Password"
                      wrapperClass="mb-4"
                    />

                    <!-- Repeat Password input -->
                    <MDBInput
                      type="password"
                      v-model="registerRepeatPassword"
                      label="Repeat password"
                      wrapperClass="mb-4"
                    />

                    <!-- Checkbox -->
                    <MDBCheckbox
                      label="I have read and agree to the terms"
                      v-model="registerCheck"
                      wrapperClass="d-flex justify-content-center mb-4"
                      checked
                    />

                    <!-- Submit button -->
                    <MDBBtn color="primary" block class="mb-3">
                      Sign in
                    </MDBBtn>
                  </form>
                </MDBTabPane>
              </MDBTabContent>
              <!-- Pills content -->
            </MDBTabs>
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
  MDBTabs,
  MDBTabNav,
  MDBTabContent,
  MDBTabItem,
  MDBTabPane,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
    MDBIcon,
    MDBBtn,
    MDBInput,
    MDBCheckbox,
  },
  setup() {
    const activeTab = ref("ex-1");

    const loginName = ref("");
    const loginPassword = ref("");
    const loginCheck = ref(true);

    const registerName = ref("");
    const registerUsername = ref("");
    const registerEmail = ref("");
    const registerPassword = ref("");
    const registerRepeatPassword = ref("");
    const registerCheck = ref(true);

    return {
      activeTab,
      loginName,
      loginPassword,
      loginCheck,
      registerName,
      registerUsername,
      registerEmail,
      registerPassword,
      registerRepeatPassword,
      registerCheck,
    };
  },
};
</script>
