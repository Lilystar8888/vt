<template>
  <!-- Container for demo purpose -->
  <MDBContainer class="my-5 py-5">
    <!--Section: Chat-->
    <section>
      <MDBCard>
        <MDBCardBody style="position: relative; overflow: hidden">
          <!--Section: Users-->
          <section>
            <!-- Sidenav-->
            <MDBSideNav
              id="sidenav-inner"
              v-model="innerSidenav"
              :modeBreakpoint="1000"
              :side="side"
              :over="over"
              absolute
              style="z-index: 1000"
              backdropStyle="z-index: 999"
            >
              <div class="p-3">
                <MDBInput
                  v-model="search"
                  type="search"
                  placeholder="Search"
                  label="Search"
                  aria-describedby="search-addon"
                />
              </div>

              <MDBSideNavMenu>
                <MDBSideNavItem>
                  <MDBSideNavLink>
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                      class="rounded-circle me-2"
                      style="width: 30px; height: 30px"
                      alt=""
                    />
                    <span class="d-block">Anna Doe</span>
                  </MDBSideNavLink>
                </MDBSideNavItem>
                <MDBSideNavItem>
                  <MDBSideNavLink>
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                      class="rounded-circle me-2"
                      style="width: 30px; height: 30px"
                      alt=""
                    />
                    <span class="d-block">Alan Turing</span>
                  </MDBSideNavLink>
                </MDBSideNavItem>
                <MDBSideNavItem>
                  <MDBSideNavLink>
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"
                      class="rounded-circle me-2"
                      style="width: 30px; height: 30px"
                      alt=""
                    />
                    <span class="d-block">Veronica Smith</span>
                  </MDBSideNavLink>
                </MDBSideNavItem>
                <MDBSideNavItem>
                  <MDBSideNavLink>
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                      class="rounded-circle me-2"
                      style="width: 30px; height: 30px"
                      alt=""
                    />
                    <span class="d-block">Tom Johnson</span>
                  </MDBSideNavLink>
                </MDBSideNavItem>
              </MDBSideNavMenu>
            </MDBSideNav>
            <!-- Sidenav-->
          </section>
          <!--Section: Users-->

          <!--Section: Messages-->
          <section class="inner-content">
            <div class="d-flex">
              <MDBBtn
                data-mdb-toggle="sidenav"
                data-target="#sidenav-inner"
                class="shadow-0 p-0 me-3 d-block d-lg-none"
                aria-controls="#sidenav-inner"
                aria-haspopup="true"
                @click="innerSidenav = !innerSidenav"
              >
                <MDBIcon icon="bars" size="lg" />
              </MDBBtn>

              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                class="rounded-circle me-2"
                style="width: 30px; height: 30px"
                alt=""
              />

              <span>Anna Doe</span>
            </div>

            <hr />

            <!-- Single message - interlocutor -->
            <div class="d-flex justify-content-start w-100">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                class="rounded-circle me-2"
                style="width: 30px; height: 30px"
                alt=""
              />
              <p
                class="p-3 bg-light rounded-lg shadow-1 shadow-1"
                style="max-width: 533px"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                praesentium ad, dolores quaerat maxime architecto dolore,
                necessitatibus rem possimus quam ratione sit neque quidem
                officia dolorum nostrum enim dignissimos eum.
                <small class="float-right text-dark mt-4">14:52</small>
              </p>
            </div>
            <!-- Single message - interlocutor -->

            <!-- Single message - me -->
            <div class="d-flex justify-content-end ms-auto">
              <p
                class="p-3 bg-primary shadow-1-strong text-white rounded-lg"
                style="max-width: 533px"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                praesentium ad, dolores quaerat maxime architecto dolore,
                necessitatibus rem possimus quam ratione sit neque quidem
                officia dolorum nostrum enim dignissimos eum.
                <small class="float-right mt-4">14:53</small>
              </p>
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                class="rounded-circle ms-2"
                style="width: 30px; height: 30px"
                alt=""
              />
            </div>
            <!-- Single message - me -->

            <!-- Single message - interlocutor -->
            <div class="d-flex justify-content-start w-100">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                class="rounded-circle me-2"
                style="width: 30px; height: 30px"
                alt=""
              />
              <p
                class="p-3 bg-light rounded-lg shadow-1"
                style="max-width: 533px"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                praesentium ad, dolores quaerat maxime architecto dolore.
                <small class="float-right text-dark mt-4">14:54</small>
              </p>
            </div>
            <!-- Single message - interlocutor -->

            <!-- Single message - me -->
            <div class="d-flex justify-content-end ms-auto">
              <p
                class="p-3 bg-primary shadow-1-strong text-white rounded-lg"
                style="max-width: 533px"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo
                accusantium quibusdam quidem veniam inventore, libero distinctio
                eaque, qui molestiae architecto aspernatur. Praesentium natus
                maxime suscipit dolorem delectus, doloremque reprehenderit
                numquam distinctio quas repudiandae veritatis incidunt quo,
                consequatur quod laborum laboriosam. Quos ducimus, ad veritatis
                illo minus molestiae omnis pariatur.
                <small class="float-right mt-4">14:55</small>
              </p>
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                class="rounded-circle ms-2"
                style="width: 30px; height: 30px"
                alt=""
              />
            </div>
            <!-- Single message - me -->

            <!-- Single message - interlocutor -->
            <div class="d-flex justify-content-start w-100">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                class="rounded-circle me-2"
                style="width: 30px; height: 30px"
                alt=""
              />
              <p
                class="p-3 bg-light rounded-lg shadow-1"
                style="max-width: 533px"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                praesentium ad, dolores quaerat maxime architecto dolore,
                necessitatibus rem possimus quam ratione sit neque quidem
                officia dolorum nostrum enim dignissimos eum.
                <small class="float-right text-dark mt-4">14:52</small>
              </p>
            </div>
            <!-- Single message - interlocutor -->

            <!-- Single message - me -->
            <div class="d-flex justify-content-end ms-auto">
              <p
                class="p-3 bg-primary shadow-1-strong text-white rounded-lg"
                style="max-width: 533px"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                praesentium ad, dolores quaerat maxime architecto dolore,
                necessitatibus rem possimus quam ratione sit neque quidem
                officia dolorum nostrum enim dignissimos eum.
                <small class="float-right mt-4">14:53</small>
              </p>
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                class="rounded-circle ms-2"
                style="width: 30px; height: 30px"
                alt=""
              />
            </div>
            <!-- Single message - me -->

            <!-- Single message - interlocutor -->
            <div class="d-flex justify-content-start w-100">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                class="rounded-circle me-2"
                style="width: 30px; height: 30px"
                alt=""
              />
              <p
                class="p-3 bg-light rounded-lg shadow-1"
                style="max-width: 533px"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                praesentium ad, dolores quaerat maxime architecto dolore.
                <small class="float-right text-dark mt-4">14:54</small>
              </p>
            </div>
            <!-- Single message - interlocutor -->

            <!-- Single message - me -->
            <div class="d-flex justify-content-end ms-auto">
              <p
                class="p-3 bg-primary shadow-1-strong text-white rounded-lg"
                style="max-width: 533px"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo
                accusantium quibusdam quidem veniam inventore, libero distinctio
                eaque, qui molestiae architecto aspernatur. Praesentium natus
                maxime suscipit dolorem delectus, doloremque reprehenderit
                numquam distinctio quas repudiandae veritatis incidunt quo,
                consequatur quod laborum laboriosam. Quos ducimus, ad veritatis
                illo minus molestiae omnis pariatur.
                <small class="float-right mt-4">14:55</small>
              </p>
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                class="rounded-circle ms-2"
                style="width: 30px; height: 30px"
                alt=""
              />
            </div>
            <!-- Single message - me -->
          </section>
          <!--Section: Messages-->

          <!--Section: Message input-->
          <section id="message-input" class="fixed-bottom card bg-light">
            <MDBCardBody>
              <form class="d-flex">
                <MDBBtn color="primary" class="px-3">
                  <MDBIcon icon="plus-circle" />
                </MDBBtn>

                <div class="w-100 mx-2">
                  <MDBTextarea
                    v-model="textarea"
                    rows="1"
                    placeholder="Type a message"
                  ></MDBTextarea>
                </div>

                <MDBBtn color="primary" class="px-3">
                  <MDBIcon icon="thumbs-up" />
                </MDBBtn>
              </form>
            </MDBCardBody>
          </section>
          <!--Section: Message input-->
        </MDBCardBody>
      </MDBCard>
    </section>
    <!--Section: Chat-->
  </MDBContainer>
  <!-- Container for demo purpose -->
</template>

<script>
import {
  MDBContainer,
  MDBInput,
  MDBSideNav,
  MDBSideNavMenu,
  MDBSideNavItem,
  MDBSideNavLink,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTextarea,
} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    MDBContainer,
    MDBInput,
    MDBSideNav,
    MDBSideNavMenu,
    MDBSideNavItem,
    MDBSideNavLink,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBTextarea,
  },
  setup() {
    const innerSidenav = ref(true);
    const side = ref(true);
    const over = ref(false);

    const search = ref("");
    const textarea = ref("");

    return { innerSidenav, side, over, search, textarea };
  },
};
</script>

<style lang="scss">
#sidenav-inner .ps {
  height: 100% !important;
}

@media (min-width: 1400px) {
  #main-navbar,
  #message-input {
    padding-left: 240px;
  }
}
@media (min-width: 1000px) {
  .inner-content {
    padding-left: 240px;
  }
}
</style>