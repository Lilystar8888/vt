<template>
  <!-- Main navigation -->
  <header>
    <!-- Sidenav-->
    <MDBSideNav
      v-model="sidenavMDB"
      id="sidenavMDB"
      contentSelector="#page-content"
      :modeBreakpoint="1400"
      :closeOnEsc="true"
    >
      <div class="d-flex justify-content-center py-4">
        <img
          id="MDB-logo"
          src="https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
          alt="MDB Logo"
          draggable="false"
        />
      </div>
      <MDBSideNavMenu accordion>
        <MDBSideNavItem>
          <MDBSideNavLink @click="handleLinkClick" to="/">
            <MDBIcon icon="chart-area" class="fa-fw me-3"></MDBIcon>
            <span>SEO dashboard</span></MDBSideNavLink
          >
        </MDBSideNavItem>
        <MDBSideNavItem>
          <MDBSideNavLink @click="handleLinkClick" to="e-commerce-1">
            <MDBIcon icon="chart-pie" class="fa-fw me-3"></MDBIcon>
            <span>eCommerce dashboard</span></MDBSideNavLink
          >
        </MDBSideNavItem>
        <MDBSideNavItem>
          <MDBSideNavLink @click="handleLinkClick" to="e-commerce-2">
            <MDBIcon icon="chart-line" class="fa-fw me-3"></MDBIcon>
            <span>eCommerce dashboard</span></MDBSideNavLink
          >
        </MDBSideNavItem>
        <MDBSideNavItem>
          <MDBSideNavLink @click="handleLinkClick" to="ads">
            <MDBIcon icon="chart-pie" class="fa-fw me-3"></MDBIcon>
            <span>Ads dashboard</span></MDBSideNavLink
          >
        </MDBSideNavItem>
        <MDBSideNavItem>
          <MDBSideNavLink @click="handleLinkClick" to="order">
            <MDBIcon icon="chart-bar" class="fa-fw me-3"></MDBIcon>
            <span>Order dashboard</span></MDBSideNavLink
          >
        </MDBSideNavItem>
        <MDBSideNavItem>
          <MDBSideNavLink @click="handleLinkClick" to="traffic">
            <MDBIcon icon="chart-area" class="fa-fw me-3"></MDBIcon>
            <span>Traffic dashboard</span></MDBSideNavLink
          >
        </MDBSideNavItem>
        <MDBSideNavItem>
          <MDBSideNavLink @click="handleLinkClick" to="invoice">
            <MDBIcon icon="money-bill-alt" class="fa-fw me-3"></MDBIcon
            ><span>Invoice page</span></MDBSideNavLink
          >
        </MDBSideNavItem>

        <MDBSideNavItem collapse icon="tablet-alt" title="Apps">
          <MDBSideNavItem>
            <MDBSideNavLink @click="handleLinkClick" to="chat-app"
              >Chat app</MDBSideNavLink
            >
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink @click="handleLinkClick" to="mailbox-app"
              >Mailbox app</MDBSideNavLink
            >
          </MDBSideNavItem>
        </MDBSideNavItem>

        <MDBSideNavItem collapse icon="cogs" title="Management">
          <MDBSideNavItem>
            <MDBSideNavLink @click="handleLinkClick" to="user-profile"
              >User profile</MDBSideNavLink
            >
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink @click="handleLinkClick" to="user-management"
              >User management</MDBSideNavLink
            >
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink @click="handleLinkClick" to="login-register"
              >Login / register page</MDBSideNavLink
            >
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink @click="handleLinkClick" to="forgot-password"
              >Forgot password page</MDBSideNavLink
            >
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink @click="handleLinkClick" to="change-password"
              >Change password page</MDBSideNavLink
            >
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink @click="handleLinkClick" to="404"
              >404 page</MDBSideNavLink
            >
          </MDBSideNavItem>
        </MDBSideNavItem>
      </MDBSideNavMenu>
    </MDBSideNav>
    <!-- Sidenav-->

    <!-- Navbar-->
    <MDBNavbar
      expand="lg"
      light
      bg="light"
      container
      id="main-navbar"
      position="top"
    >
      <MDBNavbarToggler
        @click="sidenavMDB = !sidenavMDB"
        target="#sidenavMDB"
        class="me-3"
      >
        <MDBIcon icon="bars" />
      </MDBNavbarToggler>
      <MDBCollapse id="navbarSupportedContent">
        <MDBRow class="g-3 align-items-center">
          <MDBInput
            wrapperClass="col-auto"
            label='Search (ctrl + "/" to focus)'
            v-model="input1"
          />
          <MDBCol auto>
            <a class="m-1" href="#!" role="button" style="color: #616161">
              <MDBIcon icon="search"></MDBIcon>
            </a>
          </MDBCol>
        </MDBRow>
      </MDBCollapse>

      <MDBNavbarNav right class="d-flex flex-row">
        <!-- Navbar dropdown -->
        <MDBDropdown v-model="dropdown1" class="nav-item me-3 me-lg-0">
          <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdown1 = !dropdown1"
            ><MDBIcon icon="bell" />
            <MDBBadge notification color="danger" pill>1</MDBBadge>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem to="#">Action</MDBDropdownItem>
            <MDBDropdownItem to="#">Another Action</MDBDropdownItem>
            <MDBDropdownItem to="#">Something else here</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBNavbarItem to="#" class="me-3 me-lg-0">
          <MDBIcon icon="fill-drip" />
        </MDBNavbarItem>
        <MDBNavbarItem to="#" class="me-3 me-lg-0">
          <MDBIcon iconStyle="fab" icon="github" />
        </MDBNavbarItem>

        <MDBDropdown v-model="dropdown2" class="nav-item me-3 me-lg-0">
          <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdown2 = !dropdown2"
          >
            <i class="united kingdom flag m-0"></i>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem to="#"
              ><i class="united kingdom flag"></i>English
              <i class="fa fa-check text-success ms-2"></i>
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown v-model="dropdown3" class="nav-item me-3 me-lg-0">
          <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdown3 = !dropdown3"
            ><img
              src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
              class="rounded-circle"
              height="22"
              alt=""
              loading="lazy"
            />
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem to="#">My profile</MDBDropdownItem>
            <MDBDropdownItem to="#">Settings</MDBDropdownItem>
            <MDBDropdownItem to="#">Logout</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavbarNav>
    </MDBNavbar>
    <!-- Navbar-->
  </header>
  <!-- Main navigation -->
</template>

<script>
import {
  MDBSideNav,
  MDBSideNavMenu,
  MDBSideNavItem,
  MDBSideNavLink,
  MDBCollapse,
  MDBIcon,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBInput,
  MDBBadge,
  MDBRow,
  MDBCol,
} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    MDBSideNav,
    MDBSideNavMenu,
    MDBSideNavItem,
    MDBSideNavLink,
    MDBCollapse,
    MDBIcon,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarToggler,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBInput,
    MDBBadge,
    MDBRow,
    MDBCol,
  },
  setup() {
    const sidenavMDB = ref(true);
    const dropdown1 = ref(false);
    const dropdown2 = ref(false);
    const dropdown3 = ref(false);
    const input1 = ref("");

    const handleLinkClick = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth < 1400) {
        sidenavMDB.value = false;
      }
    };

    return {
      sidenavMDB,
      dropdown1,
      dropdown2,
      dropdown3,
      input1,
      handleLinkClick,
    };
  },
};
</script>

<style scoped>
.page-intro {
  background-size: cover;
  background-position-x: center;
  background-color: white;
  width: 100vw;
  height: 100vh;
}

@media (min-width: 1400px) {
  main,
  #main-navbar {
    padding-left: 240px;
  }
}
</style>