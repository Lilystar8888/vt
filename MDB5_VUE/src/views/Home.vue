
<script>
import { ref, reactive, onMounted } from "vue";

import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBTabs,
  MDBTabNav,
  MDBTabContent,
  MDBTabItem,
  MDBTabPane,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
  MDBInput,
} from "mdb-vue-ui-kit";

// @ is an alias to /src
import TableEditor from "@/components/TableEditor.vue";
import { apiSplits } from "@/components/data";

export default {
  components: {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
    MDBBtn,
    MDBIcon,
    TableEditor,
    MDBSpinner,
    MDBInput,
  },
  setup() {

    const state = reactive({
      newtabInputName: '',
    })

    const collapse1 = ref(false);
    const dropdown1 = ref(false);
    const activeTabId1 = ref("tab1");

    const asyncSplits = ref([]);
    const loadingAsync = ref(false);
    const loadAsyncSplits = () => {
      console.log("loadAsyncSplits", apiSplits);
      var xtimer = setTimeout(() => {
        console.log("xtimer");
        if (apiSplits && apiSplits.length > 0) {
          asyncSplits.value = apiSplits;
          loadingAsync.value = true;
          clearTimeout(xtimer);
        }
      }, 1000);
    };

    const AddNewSplit = () => {
      const index = asyncSplits.value.length + 1;
      asyncSplits.value.push({
        split_id: `tab${index}`,
        split_name: ``,
        split_data: {}
      });
    };

    onMounted(() => {
      loadAsyncSplits();
    });

    return { 
      state,
      collapse1,
      dropdown1,
      activeTabId1,
      asyncSplits,
      loadingAsync,
      AddNewSplit,
    };
  },
};
</script>

<template>
  <div>
    <!---->
    <MDBNavbar expand="lg" light bg="light" container>
      <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>
      <MDBNavbarToggler
        @click="collapse1 = !collapse1"
        target="#navbarSupportedContent"
      ></MDBNavbarToggler>
      <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
        <MDBNavbarNav class="mb-2 mb-lg-0">
          <MDBNavbarItem to="#" active> Home </MDBNavbarItem>
          <MDBNavbarItem href="#"> Link </MDBNavbarItem>
          <MDBNavbarItem>
            <!-- Navbar dropdown -->
            <MDBDropdown class="nav-item" v-model="dropdown1">
              <MDBDropdownToggle
                tag="a"
                class="nav-link"
                @click="dropdown1 = !dropdown1"
                >Dropdown</MDBDropdownToggle
              >
              <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
                <MDBDropdownItem href="#">Action</MDBDropdownItem>
                <MDBDropdownItem href="#">Another Action</MDBDropdownItem>
                <MDBDropdownItem href="#">Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
          <MDBNavbarItem to="#" disabled> Disabled </MDBNavbarItem>
        </MDBNavbarNav>
        <span>NT</span>
      </MDBCollapse>
    </MDBNavbar>
    <!---->
    <div v-if="loadingAsync" class="mt-3 mx-3">
      <MDBTabs v-model="activeTabId1">
        <!-- Tabs navs -->
        <div class="d-flex align-items-center mb-3">
          <MDBTabNav tabsClasses="mb-0">
            <MDBTabItem
              v-for="split in asyncSplits"
              :key="split.split_id"
              :tabId="split.split_id"
              :href="split.split_id"
            >
              <div
                v-if="split.split_name.length > 0"
                class="d-inline-flex align-items-center"
              >
                <span>{{ split.split_name }}</span>
                <MDBBtn color="white" class="m-0 ms-2 shadow-0" size="sm">
                  <MDBIcon icon="pen" />
                </MDBBtn>
              </div>
              <div v-else>
                <MDBInput
                  inputGroup
                  :formOutline="false"
                  wrapperClass="newtabInput m-0 p-0"
                  v-model="state.newtabInputName"
                  placeholder="新分頁"
                  aria-label="新增分頁"
                  aria-describedby="button-newtab"
                >
                  <MDBBtn 
                    color="white" 
                    class="m-0 ms-1 shadow-0" 
                    size="sm"
                  >
                    <MDBIcon icon="check" />
                  </MDBBtn>
                </MDBInput>
              </div>
            </MDBTabItem>
          </MDBTabNav>
          <MDBBtn
            color="white"
            size="sm"
            class="shadow-0"
            @click="AddNewSplit()"
          >
            <MDBIcon icon="plus" />
          </MDBBtn>
        </div>
        <!-- Tabs content -->
        <MDBTabContent>
          <MDBTabPane
            v-for="split in asyncSplits"
            :key="split.split_id"
            :tabId="split.split_id"
          >
            <TableEditor :tabId="split.split_id" />
          </MDBTabPane>
        </MDBTabContent>
      </MDBTabs>
    </div>
    <div
      v-else
      class="
        d-flex
        flex-column
        justify-content-center
        align-items-center
        mt-5
        mx-3
      "
    >
      <p>系統加載中</p>
      <MDBSpinner color="primary" />
    </div>
  </div>
</template>

<style>

.nav-tabs > .btn {
  min-width: 40px;
  height: 40px;
}

.nav-tabs .nav-link {
  display: inline-flex;
  justify-self: center;
  align-items: center;
  height: 40px;
  padding: 0 1em;
  /*border-color: #ccc;*/
}

.nav-tabs .nav-link:hover {
  background-color: #fff;
  /*border-color: var(--mdb-primary);*/
}

.nav-tabs .nav-link .btn {
  padding: 0px 5px;
}

.nav-tabs .nav-link .btn.btn-white:hover,
.nav-tabs .nav-link .btn-white:focus, 
.nav-tabs .nav-link .btn-white.focus,
.nav-tabs .nav-link .btn-white:active,
.nav-tabs .nav-link .btn-white.active {
  background-color: #fff;
}

.nav-tabs .nav-link .btn.btn-white:hover .fas {
  color: var(--mdb-primary);
}

.input-group.newtabInput > .form-control {
  width: 66px;
  height: 24px;
  min-height: unset;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  border: none;
  margin: 0;
  padding: 4px;
}

.input-group.newtabInput > .form-control:focus {
  border-color: #bdbdbd;
  box-shadow: none;
}

thead, tbody, tfoot, tr, td, th {
  border-width: 0.5px;
}

.table-editor__sort-icon {
  position: relative;
}

</style>