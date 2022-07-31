<template>
  <!-- Container for demo purpose -->
  <MDBContainer class="my-5 py-5">
    <h1 class="h5 text-center py-5 mb-0">User management</h1>

    <!--Section: Content-->
    <section>
      <MDBCard>
        <MDBCardBody>
          <div class="d-flex justify-content-end mb-4">
            <MDBInput v-model="search" label="Search" :disabled="edit" />
            <MDBBtn
              color="primary"
              size="sm"
              class="ms-3"
              @click="$refs.editor.addRow()"
              :disabled="edit"
              ><MDBIcon icon="plus"></MDBIcon
            ></MDBBtn>
          </div>
          <hr />
          <MDBTableEditor
            mode="modal"
            v-model:dataset="data"
            :search="search"
            :entries="5"
            :entriesOptions="[5, 10, 15]"
            v-model:edit="edit"
            ref="editor"
          />
        </MDBCardBody>
      </MDBCard>
    </section>
    <!--Section: Content-->
  </MDBContainer>
  <!-- Container for demo purpose -->
</template>

<script>
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdb-vue-ui-kit";
import { MDBTableEditor } from "mdb-vue-table-editor";
import { ref } from "vue";

export default {
  components: {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBBtn,
    MDBTableEditor,
    MDBIcon,
  },
  setup() {
    const editor = ref(null);
    const search = ref("");
    const edit = ref(false);

    const data = ref({
      columns: [
        {
          width: 250,
          label: "Company",
          field: "company",
        },
        {
          width: 250,
          sort: false,
          defaultValue: "Warsaw",
          options: ["London", "Warsaw", "New York"],
          inputType: "select",
          label: "Office",
          field: "office",
        },
        {
          width: 250,
          inputType: "number",
          defaultValue: 1,
          label: "Employees",
          field: "employees",
        },
        {
          width: 100,
          defaultValue: false,
          inputType: "checkbox",
          label: "International",
          field: "international",
        },
      ],
      rows: [
        {
          company: "Smith & Johnson",
          office: "London",
          employees: 30,
          international: true,
        },
        {
          company: "P.J. Company",
          office: "London",
          employees: 80,
          international: false,
        },
        {
          company: "Food & Wine",
          office: "London",
          employees: 12,
          international: false,
        },
        {
          company: "IT Service",
          office: "London",
          employees: 17,
          international: false,
        },
        {
          company: "A. Jonson Gallery",
          office: "London",
          employees: 4,
          international: false,
        },
        {
          company: "F.A. Architects",
          office: "London",
          employees: 4,
          international: false,
        },
      ],
    });

    return {
      editor,
      search,
      edit,
      data,
    };
  },
};
</script>
