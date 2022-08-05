<template>
  <Docs :mainTitle="mainTitle" :seoTitle="seoTitle" :description="description">
    <template #overview>
      <!--Section: Basic example-->
      <section id="section-basic-example">
        <!-- Section title -->
        <h2 class="mb-4">Basic example</h2>

        <p class="mb-4">
          You can initialize the component via <code>MDBTableEditor</code>.You
          can pass the data to the component in two ways. First is to bind the
          data with an array of columns and rows to the
          <code>dataset</code> property. Second way is to create a HTML markup
          for your table inside MDBDatatable component - you can customize your
          table later by adding props to the component. Some of the more
          advanced options for columns, can be also used by setting
          data-mdb-attributes directly to a th tag (f.e.
          <code>&lt;th data-mdb-sort="false"&gt;</code>).
        </p>

        <p class="mb-4">
          When edit mode is enabled, the user shouldn't be able to interact with
          other parts of your website, as it can lead to loss of unsaved
          changes. You can control disabled state with
          <code>v-model:edit</code> property binding or by listening to
          <code>edit</code> and <code>exit</code> events.
        </p>

        <p class="note note-primary">
          <strong>Note:</strong> search field and add button are not a build-in
          part of Table Editor.
        </p>

        <p class="note note-warning">
          Table Editor collects information from HTML markup to create a data
          structure - the
          <code>&lt;table&gt;</code> element will be replaced in the DOM with a
          different node after component initializes.
        </p>

        <!--Section: Demo-->
        <section class="border p-4 mb-4">
          <div class="d-flex justify-content-end mb-4">
            <MDBInput
              v-model="basicSearch"
              label="Search"
              :disabled="basicEdit"
            />
            <MDBBtn
              color="primary"
              size="sm"
              class="ms-3"
              @click="$refs.basicEditorRef.addRow()"
              :disabled="basicEdit"
              ><MDBIcon icon="plus"></MDBIcon
            ></MDBBtn>
          </div>
          <hr />
          <MDBTableEditor
            :search="basicSearch"
            :entries="5"
            :entriesOptions="[5, 10, 15]"
            v-model:edit="basicEdit"
            ref="basicEditorRef"
          >
            <table class="table">
              <thead>
                <tr>
                  <th class="th-sm" data-mdb-width="250">Company</th>
                  <th class="th-sm" data-mdb-width="250" data-mdb-sort="false">
                    Address
                  </th>
                  <th class="th-sm" data-mdb-width="250" data-mdb-sort="false">
                    Employees
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Smith & Johnson</td>
                  <td>Park Lane 2, London</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>P.J. Company</td>
                  <td>Oak Street 7, Aberdeen</td>
                  <td>80</td>
                </tr>
                <tr>
                  <td>Food & Wine</td>
                  <td>Netherhall Gardens 3, Hampstead</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>IT Service</td>
                  <td>Warwick Road 14, London</td>
                  <td>17</td>
                </tr>
                <tr>
                  <td>A. Jonson Gallery</td>
                  <td>Oaklands Avenue 2, London</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>F.A. Architects</td>
                  <td>Frognal Way 7, Hampstead</td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </MDBTableEditor>
        </section>
        <!--Section: Demo-->

        <!--Section: Code-->
        <section>
          <!-- prettier-ignore -->
          <!-- <pre v-pre>
            <mdbsnippet>
              <code data-lang="html" data-name="template">
                <template>
                  <div class="d-flex justify-content-end mb-4">
                    <MDBInput
                      v-model="basicSearch"
                      label="Search"
                      :disabled="basicEdit"
                    />
                    <MDBBtn
                      color="primary"
                      size="sm"
                      class="ms-3"
                      @click="$refs.basicEditorRef.addRow()"
                      :disabled="basicEdit"
                      ><MDBIcon icon="plus"></MDBIcon
                    ></MDBBtn>
                  </div>
                  <hr />
                  <MDBTableEditor
                    :search="basicSearch"
                    :entries="5"
                    :entriesOptions="[5, 10, 15]"
                    v-model:edit="basicEdit"
                    ref="basicEditorRef"
                  >
                    <table class="table">
                      <thead>
                        <tr>
                          <th class="th-sm" data-mdb-width="250">Company</th>
                          <th class="th-sm" data-mdb-width="250" data-mdb-sort="false">
                            Address
                          </th>
                          <th class="th-sm" data-mdb-width="250" data-mdb-sort="false">
                            Employees
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Smith & Johnson</td>
                          <td>Park Lane 2, London</td>
                          <td>30</td>
                        </tr>
                        <tr>
                          <td>P.J. Company</td>
                          <td>Oak Street 7, Aberdeen</td>
                          <td>80</td>
                        </tr>
                        <tr>
                          <td>Food & Wine</td>
                          <td>Netherhall Gardens 3, Hampstead</td>
                          <td>12</td>
                        </tr>
                        <tr>
                          <td>IT Service</td>
                          <td>Warwick Road 14, London</td>
                          <td>17</td>
                        </tr>
                        <tr>
                          <td>A. Jonson Gallery</td>
                          <td>Oaklands Avenue 2, London</td>
                          <td>4</td>
                        </tr>
                        <tr>
                          <td>F.A. Architects</td>
                          <td>Frognal Way 7, Hampstead</td>
                          <td>4</td>
                        </tr>
                      </tbody>
                    </table>
                  </MDBTableEditor>
                </template>
              </code>
              <code data-lang="javascript" data-name="script">
                <script>
                  import { MDBInput, MDBBtn, MDBIcon, MDBTableEditor } from "mdb-vue-ui-kit";
                  import { ref } from "vue";

                  export default {
                    components: {
                      MDBInput, MDBBtn, MDBIcon, MDBTableEditor
                    },
                    setup() {
                      const basicEditorRef = ref(null);
                      const basicSearch = ref("");
                      const basicEdit = ref(false);

                      return {
                        basicEditorRef,
                        basicSearch,
                        basicEdit
                      }
                    }           
                  };
                </script>
              </code>
            </mdbsnippet>
          </pre> -->
        </section>
        <!--Section: Code-->
      </section>
      <!--Section: Basic example-->

      <hr class="my-5" />

      <!--Section: Modal-->
      <section id="section-modal">
        <!-- Section title -->
        <h2 class="mb-4">Modal</h2>

        <p class="mb-4">
          To change the default editing mode (inline) to the modal version, set
          property <code>mode</code> to <code>"modal"</code>.
        </p>

        <!--Section: Demo-->
        <section class="border p-4 mb-4">
          <div class="d-flex justify-content-end mb-4">
            <MDBInput
              v-model="modalSearch"
              label="Search"
              :disabled="modalEdit"
            />
            <MDBBtn
              color="primary"
              size="sm"
              class="ms-3"
              @click="$refs.modalEditorRef.addRow()"
              :disabled="modalEdit"
              ><MDBIcon icon="plus"></MDBIcon
            ></MDBBtn>
          </div>
          <hr />
          <MDBTableEditor
            mode="modal"
            v-model:dataset="modalData"
            :search="modalSearch"
            :entries="5"
            :entriesOptions="[5, 10, 15]"
            v-model:edit="modalEdit"
            ref="modalEditorRef"
          />
        </section>
        <!--Section: Demo-->

        <!--Section: Code-->
        <section>
          <!-- prettier-ignore -->
          <!-- <pre v-pre>
            <mdbsnippet>
              <code data-lang="html" data-name="template">
                <template>
                  <div class="d-flex justify-content-end mb-4">
                    <MDBInput
                      v-model="modalSearch"
                      label="Search"
                      :disabled="modalEdit"
                    />
                    <MDBBtn
                      color="primary"
                      size="sm"
                      class="ms-3"
                      @click="$refs.modalEditorRef.addRow()"
                      :disabled="modalEdit"
                      ><MDBIcon icon="plus"></MDBIcon
                    ></MDBBtn>
                  </div>
                  <hr />
                  <MDBTableEditor
                    mode="modal"
                    v-model:dataset="modalData"
                    :search="modalSearch"
                    :entries="5"
                    :entriesOptions="[5, 10, 15]"
                    v-model:edit="modalEdit"
                    ref="modalEditorRef"
                  />
                </template>
              </code>
              <code data-lang="javascript" data-name="script">
                <script>
                  import { MDBInput, MDBBtn, MDBIcon, MDBTableEditor } from "mdb-vue-ui-kit";
                  import { ref } from "vue";

                  export default {
                    components: {
                      MDBInput, MDBBtn, MDBIcon, MDBTableEditor
                    },
                    setup() {
                      const modalEditorRef = ref(null);
                      const modalSearch = ref("");
                      const modalEdit = ref(false);
                      const modalData = ref({
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
                          }
                        ]
                      });

                      return {
                        modalEditorRef,
                        modalSearch,
                        modalEdit,
                        modalData
                      }
                    }           
                  };
                </script>
              </code>
            </mdbsnippet>
          </pre> -->
        </section>
        <!--Section: Code-->
      </section>
      <!--Section: Modal-->

      <hr class="my-5" />

      <!--Section: Inputs example-->
      <section id="section-inputs">
        <!-- Section title -->
        <h2 class="mb-4">Inputs example</h2>

        <p class="mb-4">
          Table Editor supports several input types - for example, if you wish
          to force a user to enter only Boolean values in one column, you can
          set its
          <code>inputType</code> to a checkbox.
        </p>

        <p>Supported input types:</p>
        <ul>
          <li><strong>Text</strong> (default)</li>
          <li><strong>Number</strong></li>
          <li>
            <strong>Checkbox</strong> - displays a checkbox in edit mode and
            true/false value otherwise
          </li>
          <li>
            <strong>Select</strong> - additionally requires an array of options
          </li>
        </ul>

        <!--Section: Demo-->
        <section class="border p-4 mb-4">
          <div class="d-flex justify-content-end mb-4">
            <MDBInput
              v-model="inputsSearch"
              label="Search"
              :disabled="inputsEdit"
            />
            <MDBBtn
              color="primary"
              size="sm"
              class="ms-3"
              @click="$refs.inputsEditorRef.addRow()"
              :disabled="inputsEdit"
              ><MDBIcon icon="plus"></MDBIcon
            ></MDBBtn>
          </div>
          <hr />
          <MDBTableEditor
            v-model:dataset="inputsData"
            :search="inputsSearch"
            :entries="5"
            :entriesOptions="[5, 10, 15]"
            v-model:edit="inputsEdit"
            ref="inputsEditorRef"
          />
        </section>
        <!--Section: Demo-->

        <!--Section: Code-->
        <section>
          <!-- prettier-ignore -->
          <!-- <pre v-pre>
            <mdbsnippet>
              <code data-lang="html" data-name="template">
                <template>
                  <div class="d-flex justify-content-end mb-4">
                    <MDBInput
                      v-model="modalSearch"
                      label="Search"
                      :disabled="modalEdit"
                    />
                    <MDBBtn
                      color="primary"
                      size="sm"
                      class="ms-3"
                      @click="$refs.modalEditorRef.addRow()"
                      :disabled="modalEdit"
                      ><MDBIcon icon="plus"></MDBIcon
                    ></MDBBtn>
                  </div>
                  <hr />
                  <MDBTableEditor
                    mode="modal"
                    v-model:dataset="modalData"
                    :search="modalSearch"
                    :entries="5"
                    :entriesOptions="[5, 10, 15]"
                    v-model:edit="modalEdit"
                    ref="modalEditorRef"
                  />
                </template>
              </code>
              <code data-lang="javascript" data-name="script">
                <script>
                  import { MDBInput, MDBBtn, MDBIcon, MDBTableEditor } from "mdb-vue-ui-kit";
                  import { ref } from "vue";

                  export default {
                    components: {
                      MDBInput, MDBBtn, MDBIcon, MDBTableEditor
                    },
                    setup() {
                      const modalEditorRef = ref(null);
                      const modalSearch = ref("");
                      const modalEdit = ref(false);
                      const modalData = ref({
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
                          }
                        ]
                      });

                      return {
                        modalEditorRef,
                        modalSearch,
                        modalEdit,
                        modalData
                      }
                    }           
                  };
                </script>
              </code>
            </mdbsnippet>
          </pre> -->
        </section>
        <!--Section: Code-->
      </section>
      <!--Section: Inputs example-->

      <hr class="my-5" />

      <!--Section: Disable edit-->
      <section id="section-disable-edit">
        <!-- Section title -->
        <h2 class="mb-4">Disable edit</h2>

        <p class="mb-4">
          You can disable editing for a column by setting its
          <code>editable</code> option to <code>false</code>. A user won't be
          able to change its value in the edit mode.
        </p>

        <!--Section: Demo-->
        <section class="border p-4 mb-4">
          <div class="d-flex justify-content-end mb-4">
            <MDBInput
              v-model="disabledSearch"
              label="Search"
              :disabled="disabledEdit"
            />
            <MDBBtn
              color="primary"
              size="sm"
              class="ms-3"
              @click="$refs.disabledEditorRef.addRow()"
              :disabled="disabledEdit"
              ><MDBIcon icon="plus"></MDBIcon
            ></MDBBtn>
          </div>
          <hr />
          <MDBTableEditor
            v-model:dataset="disabledData"
            :search="disabledSearch"
            :entries="5"
            :entriesOptions="[5, 10, 15]"
            v-model:edit="disabledEdit"
            ref="disabledEditorRef"
          />
        </section>
        <!--Section: Demo-->

        <!--Section: Code-->
        <section>
          <!-- prettier-ignore -->
          <!-- <pre v-pre>
            <mdbsnippet>
              <code data-lang="html" data-name="template">
                <template>
                  <div class="d-flex justify-content-end mb-4">
                    <MDBInput
                      v-model="disabledSearch"
                      label="Search"
                      :disabled="disabledEdit"
                    />
                    <MDBBtn
                      color="primary"
                      size="sm"
                      class="ms-3"
                      @click="$refs.disabledEditorRef.addRow()"
                      :disabled="disabledEdit"
                      ><MDBIcon icon="plus"></MDBIcon
                    ></MDBBtn>
                  </div>
                  <hr />
                  <MDBTableEditor
                    v-model:dataset="disabledData"
                    :search="disabledSearch"
                    :entries="5"
                    :entriesOptions="[5, 10, 15]"
                    v-model:edit="disabledEdit"
                    ref="disabledEditorRef"
                  />
                </template>
              </code>
              <code data-lang="javascript" data-name="script">
                <script>
                  import { MDBInput, MDBBtn, MDBIcon, MDBTableEditor } from "mdb-vue-ui-kit";
                  import { ref } from "vue";

                  export default {
                    components: {
                      MDBInput, MDBBtn, MDBIcon, MDBTableEditor
                    },
                    setup() {
                      const disabledEditorRef = ref(null);
                      const disabledSearch = ref("");
                      const disabledEdit = ref(false);
                      const disabledData = ref({
                        columns: [
                          {
                            width: 250,
                            label: "Company",
                            field: "company",
                            editable: false
                          },
                          {
                            width: 250,
                            sort: false,
                            defaultValue: "Warsaw",
                            options: ["London", "Warsaw", "New York"],
                            inputType: "select",
                            label: "Office",
                            field: "office",
                            editable: false
                          },
                          {
                            width: 250,
                            inputType: "number",
                            defaultValue: 1,
                            label: "Employees",
                            field: "employees",
                            editable: false
                          },
                          {
                            width: 100,
                            defaultValue: false,
                            inputType: "checkbox",
                            label: "International",
                            field: "international",
                            editable: false
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
                          }
                        ]
                      });

                      return {
                        disabledEditorRef,
                        disabledSearch,
                        disabledEdit,
                        disabledData
                      }
                    }           
                  };
                </script>
              </code>
            </mdbsnippet>
          </pre> -->
        </section>
        <!--Section: Code-->
      </section>
      <!--Section: Disable edit-->

      <hr class="my-5" />

      <!--Section: Confirm delete-->
      <section id="section-confirm-delete">
        <!-- Section title -->
        <h2 class="mb-4">Confirm delete</h2>

        <p class="mb-4">
          If you want to prevent data from being accidentally removed, you can
          set a
          <code>confirm</code> property to <code>true</code>. In this case,
          Table Editor will show a Popconfirm element before removing an entry.
        </p>

        <!--Section: Demo-->
        <section class="border p-4 mb-4">
          <div class="d-flex justify-content-end mb-4">
            <MDBInput
              v-model="confirmSearch"
              label="Search"
              :disabled="confirmEdit"
            />
            <MDBBtn
              color="primary"
              size="sm"
              class="ms-3"
              @click="$refs.disabledEditorRef.addRow()"
              :disabled="confirmEdit"
              ><MDBIcon icon="plus"></MDBIcon
            ></MDBBtn>
          </div>
          <hr />
          <MDBTableEditor
            confirm
            v-model:dataset="confirmData"
            :search="confirmSearch"
            :entries="5"
            :entriesOptions="[5, 10, 15]"
            v-model:edit="confirmEdit"
            ref="confirmEditorRef"
          />
        </section>
        <!--Section: Demo-->

        <!--Section: Code-->
        <section>
          <!-- prettier-ignore -->
          <!-- <pre v-pre>
            <mdbsnippet>
              <code data-lang="html" data-name="template">
                <template>
                  <div class="d-flex justify-content-end mb-4">
                    <MDBInput
                      v-model="confirmSearch"
                      label="Search"
                      :disabled="confirmEdit"
                    />
                    <MDBBtn
                      color="primary"
                      size="sm"
                      class="ms-3"
                      @click="$refs.disabledEditorRef.addRow()"
                      :disabled="confirmEdit"
                      ><MDBIcon icon="plus"></MDBIcon
                    ></MDBBtn>
                  </div>
                  <hr />
                  <MDBTableEditor
                    confirm
                    v-model:dataset="confirmData"
                    :search="confirmSearch"
                    :entries="5"
                    :entriesOptions="[5, 10, 15]"
                    v-model:edit="confirmEdit"
                    ref="confirmEditorRef"
                  />
                </template>
              </code>
              <code data-lang="javascript" data-name="script">
                <script>
                  import { MDBInput, MDBBtn, MDBIcon, MDBTableEditor } from "mdb-vue-ui-kit";
                  import { ref } from "vue";

                  export default {
                    components: {
                      MDBInput, MDBBtn, MDBIcon, MDBTableEditor
                    },
                    setup() {
                      const confirmEditorRef = ref(null);
                      const confirmSearch = ref("");
                      const confirmEdit = ref(false);
                      const confirmData = ref({
                        columns: [
                          {
                            width: 250,
                            label: "Company",
                            field: "company"
                          },
                          {
                            width: 250,
                            sort: false,
                            defaultValue: "Warsaw",
                            options: ["London", "Warsaw", "New York"],
                            inputType: "select",
                            label: "Office",
                            field: "office"
                          },
                          {
                            width: 250,
                            inputType: "number",
                            defaultValue: 1,
                            label: "Employees",
                            field: "employees"
                          },
                          {
                            width: 100,
                            defaultValue: false,
                            inputType: "checkbox",
                            label: "International",
                            field: "international"
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
                          }
                        ]
                      });

                      return {
                        confirmEditorRef,
                        confirmSearch,
                        confirmEdit,
                        confirmData
                      }
                    }           
                  };
                </script>
              </code>
            </mdbsnippet>
          </pre> -->
        </section>
        <!--Section: Code-->
      </section>
      <!--Section: Confirm delete-->

      <hr class="my-5" />

      <!--Section: Advanced Search-->
      <section id="section-advanced-search">
        <!-- Section title -->
        <h2 class="mb-4">Advanced search</h2>

        <p class="mb-4">
          You can create more advanced searching functionality and allow a user
          to specify in which column to search for a given phrase.
        </p>
        <p class="note note-primary">
          Search fields need to be disabled manually in the edit mode.
        </p>

        <!--Section: Demo-->
        <section class="border p-4 mb-4">
          <div class="d-flex justify-content-between mb-4">
            <div class="d-flex">
              <MDBInput
                v-model="advancedSearchQuery"
                label="Search"
                :disabled="advancedSearchEdit"
              />
              <div class="px-3 mt-1">in:</div>
              <MDBSelect
                v-model:options="advancedSearchQueryCols"
                v-model:selected="advancedSearchSelectedValue"
                :disabled="advancedSearchEdit"
                multiple
              />
              <MDBBtn
                outline="primary"
                size="sm"
                class="ms-3"
                @click="searchAdvanced"
              >
                <MDBIcon icon="search"
              /></MDBBtn>
            </div>
            <MDBBtn
              color="primary"
              size="sm"
              class="ms-3"
              @click="$refs.advancedSearchEditorRef.addRow()"
              :disabled="advancedSearchEdit"
              ><MDBIcon icon="plus"></MDBIcon
            ></MDBBtn>
          </div>
          <hr />
          <MDBTableEditor
            v-model:dataset="advancedSearchData"
            :search="advancedSearchQueryPhrase"
            :searchColumns="advancedSearchSelectedCols"
            :entries="5"
            :entriesOptions="[5, 10, 15]"
            v-model:edit="advancedSearchEdit"
            ref="advancedSearchEditorRef"
          />
        </section>
        <!--Section: Demo-->

        <!--Section: Code-->
        <section>
          <!-- prettier-ignore -->
          <!-- <pre v-pre>
            <mdbsnippet>
              <code data-lang="html" data-name="template">
                <template>
                  <div class="d-flex justify-content-between mb-4">
                    <div class="d-flex">
                      <MDBInput
                        v-model="advancedSearchQuery"
                        label="Search"
                        :disabled="advancedSearchEdit"
                      />
                      <div class="px-3 mt-1">in:</div>
                      <MDBSelect
                        v-model:options="advancedSearchQueryCols"
                        v-model:selected="advancedSearchSelectedValue"
                        :disabled="advancedSearchEdit"
                        multiple
                      />
                      <MDBBtn
                        outline="primary"
                        size="sm"
                        class="ms-3"
                        @click="searchAdvanced"
                      >
                        <MDBIcon icon="search"
                      /></MDBBtn>
                    </div>
                    <MDBBtn
                      color="primary"
                      size="sm"
                      class="ms-3"
                      @click="$refs.advancedSearchEditorRef.addRow()"
                      :disabled="advancedSearchEdit"
                      ><MDBIcon icon="plus"></MDBIcon
                    ></MDBBtn>
                  </div>
                  <hr />
                  <MDBTableEditor
                    v-model:dataset="advancedSearchData"
                    :search="advancedSearchQueryPhrase"
                    :searchColumns="advancedSearchSelectedCols"
                    :entries="5"
                    :entriesOptions="[5, 10, 15]"
                    v-model:edit="advancedSearchEdit"
                    ref="advancedSearchEditorRef"
                  />
                </template>
              </code>
              <code data-lang="javascript" data-name="script">
                <script>
                  import { MDBInput, MDBSelect, MDBBtn, MDBIcon, MDBTableEditor } from "mdb-vue-ui-kit";
                  import { ref } from "vue";

                  export default {
                    components: {
                      MDBInput, MDBSelect, MDBBtn, MDBIcon, MDBTableEditor
                    },
                    setup() {
                      const advancedSearchEditorRef = ref(null);
                      const advancedSearchQuery = ref("");
                      const advancedSearchEdit = ref(false);
                      const advancedSearchData = ref(advancedData.value);
                      const advancedSearchQueryCols = ref([
                        { text: "Company", value: "company" },
                        { text: "Office", value: "office" },
                      ]);
                      const advancedSearchSelectedValue = ref("");
                      const advancedSearchQueryPhrase = ref("");
                      const advancedSearchSelectedCols = ref([]);

                      const searchAdvanced = () => {
                        advancedSearchQueryPhrase.value = advancedSearchQuery.value;

                        advancedSearchSelectedCols.value =
                          advancedSearchSelectedValue.value.split(",");
                      };

                      return {
                        advancedSearchEditorRef,
                        advancedSearchEdit,
                        advancedSearchData,
                        advancedSearchQuery,
                        advancedSearchQueryCols,
                        advancedSearchSelectedValue,
                        advancedSearchSelectedCols,
                        advancedSearchQueryPhrase,
                        searchAdvanced
                      }
                    }           
                  };
                </script>
              </code>
            </mdbsnippet>
          </pre> -->
        </section>
        <!--Section: Code-->
      </section>
      <!--Section: Advanced Search-->

      <hr class="my-5" />

      <!--Section: Async data-mdb-->
      <section id="section-async-data">
        <!-- Section title -->
        <h2 class="mb-4">Async data</h2>

        <p class="mb-4">
          While awaiting data from API, you can prevent a user from interacting
          with Table Editor by setting <code>loading</code> property to
          <code>true</code>.
        </p>

        <!--Section: Demo-->
        <section class="border p-4 mb-4">
          <div class="d-flex justify-content-between mb-4">
            <MDBBtn color="primary" size="sm" @click="loadAsyncData"
              >Load data</MDBBtn
            >

            <div class="d-flex justify-content-end">
              <MDBInput
                v-model="asyncSearch"
                label="Search"
                :disabled="asyncEdit"
              />
              <MDBBtn
                color="primary"
                size="sm"
                class="ms-3"
                @click="$refs.asyncEditorRef.addRow()"
                :disabled="asyncEdit"
                ><MDBIcon icon="plus"></MDBIcon
              ></MDBBtn>
            </div>
          </div>
          <hr />
          <MDBTableEditor
            v-model:dataset="asyncData"
            :search="asyncSearch"
            :loading="loadingAsync"
            v-model:edit="asyncEdit"
            ref="asyncEditorRef"
          />
        </section>
        <!--Section: Demo-->

        <!--Section: Code-->
        <section>
          <!-- prettier-ignore -->
          <!-- <pre v-pre>
            <mdbsnippet>
              <code data-lang="html" data-name="template">
                <template>
                  <div class="d-flex justify-content-between mb-4">
                    <MDBBtn color="primary" size="sm" @click="loadAsyncData"
                      >Load data</MDBBtn
                    >

                    <div class="d-flex justify-content-end">
                      <MDBInput
                        v-model="asyncSearch"
                        label="Search"
                        :disabled="asyncEdit"
                      />
                      <MDBBtn
                        color="primary"
                        size="sm"
                        class="ms-3"
                        @click="$refs.asyncEditorRef.addRow()"
                        :disabled="asyncEdit"
                        ><MDBIcon icon="plus"></MDBIcon
                      ></MDBBtn>
                    </div>
                  </div>
                  <hr />
                  <MDBTableEditor
                    v-model:dataset="asyncData"
                    :search="asyncSearch"
                    :loading="loadingAsync"
                    v-model:edit="asyncEdit"
                    ref="asyncEditorRef"
                  />
                </template>
              </code>
              <code data-lang="javascript" data-name="script">
                <script>
                  import { MDBInput, MDBBtn, MDBIcon, MDBTableEditor } from "mdb-vue-ui-kit";
                  import { ref } from "vue";

                  export default {
                    components: {
                      MDBInput, MDBBtn, MDBIcon, MDBTableEditor
                    },
                    setup() {
                      const asyncEditorRef = ref(null);
                      const asyncSearch = ref("");
                      const asyncEdit = ref(false);
                      const asyncData = ref({
                        columns: [
                          { label: "Company", field: "company" },
                          { label: "Email", field: "email" },
                          { label: "Name", field: "name" },
                          { label: "Phone", field: "phone" },
                        ],
                        rows: [],
                      });
                      const loadingAsync = ref(false);

                      const loadAsyncData = () => {
                        asyncData.value.rows = [];

                        loadingAsync.value = true;

                        fetch("https://jsonplaceholder.typicode.com/users")
                          .then((response) => response.json())
                          .then((data) => {
                            asyncData.value.rows = data.map((user) => ({
                              ...user,
                              address: `${user.address.city}, ${user.address.street}`,
                              company: user.company.name,
                            }));
                            loadingAsync.value = false;
                          });

                      return {
                        asyncEditorRef,
                        asyncSearch,
                        asyncEdit,
                        asyncData,
                        loadingAsync,
                        loadAsyncData
                      }
                    }           
                  };
                </script>
              </code>
            </mdbsnippet>
          </pre> -->
        </section>
        <!--Section: Code-->
      </section>
      <!--Section: Async data-mdb-->

      <hr class="my-5" />

      <!--Section: Custom rows-->
      <section id="section-custom-rows">
        <!-- Section title -->
        <h2 class="mb-4">Custom rows</h2>

        <p class="mb-4">
          The <code>addRow()</code> method takes an optional argument - a row
          which values will be preloaded into a new entry.
        </p>

        <p class="note note-primary">
          <strong>Note:</strong> for this particular use, a row has to be an
          object.
        </p>
        <p class="note note-primary">
          <strong>Note:</strong> as adding buttons are initialized manually,
          they won't be automatically disabled in the edit mode.
        </p>

        <!--Section: Demo-->
        <section class="border p-4 mb-4">
          <MDBRow>
            <MDBCol md="3" sm="6" class="p-3">
              <h4>M.B.</h4>
              <p>(5 Avenue 26, New York)</p>
              <MDBBtn
                color="primary"
                size="sm"
                @click="
                  $refs.customRowsEditorRef.addRow({
                    company: 'M.B.',
                    address: '5 Avenue 26',
                    city: 'New York',
                  })
                "
              >
                Load into table
              </MDBBtn>
            </MDBCol>
            <MDBCol md="3" sm="6" class="p-3">
              <h4>Berkley & Clark</h4>
              <p>(43th Street 12, New York)</p>
              <MDBBtn
                color="primary"
                size="sm"
                @click="
                  $refs.customRowsEditorRef.addRow({
                    company: 'Berkley & Clark',
                    address: '43th Street 12',
                    city: 'New York',
                  })
                "
              >
                Load into table
              </MDBBtn>
            </MDBCol>
            <MDBCol md="3" sm="6" class="p-3">
              <h4>D&D Inc.</h4>
              <p>(14 Street 67, New York)</p>
              <MDBBtn
                color="primary"
                size="sm"
                @click="
                  $refs.customRowsEditorRef.addRow({
                    company: 'D&D Inc.',
                    address: '14 Street 67',
                    city: 'New York',
                  })
                "
              >
                Load into table
              </MDBBtn>
            </MDBCol>
            <MDBCol md="3" sm="6" class="p-3">
              <h4>Thomas & Co.</h4>
              <p>(2 Avenue 54, New York)</p>
              <MDBBtn
                color="primary"
                size="sm"
                @click="
                  $refs.customRowsEditorRef.addRow({
                    company: 'Thomas & Co.',
                    address: '2 Avenue 54',
                    city: 'New York',
                  })
                "
              >
                Load into table
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <hr class="mt-3" />
          <MDBTableEditor
            v-model:dataset="customRowsData"
            :search="customRowsSearch"
            v-model:edit="customRowsEdit"
            ref="customRowsEditorRef"
          />
        </section>
        <!--Section: Demo-->

        <!--Section: Code-->
        <section>
          <!-- prettier-ignore -->
          <!-- <pre v-pre>
            <mdbsnippet>
              <code data-lang="html" data-name="template">
                <template>
                  <MDBRow>
                    <MDBCol md="3" sm="6" class="p-3">
                      <h4>M.B.</h4>
                      <p>(5 Avenue 26, New York)</p>
                      <MDBBtn
                        color="primary"
                        size="sm"
                        @click="
                          $refs.customRowsEditorRef.addRow({
                            company: 'M.B.',
                            address: '5 Avenue 26',
                            city: 'New York',
                          })
                        "
                      >
                        Load into table
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="3" sm="6" class="p-3">
                      <h4>Berkley & Clark</h4>
                      <p>(43th Street 12, New York)</p>
                      <MDBBtn
                        color="primary"
                        size="sm"
                        @click="
                          $refs.customRowsEditorRef.addRow({
                            company: 'Berkley & Clark',
                            address: '43th Street 12',
                            city: 'New York',
                          })
                        "
                      >
                        Load into table
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="3" sm="6" class="p-3">
                      <h4>D&D Inc.</h4>
                      <p>(14 Street 67, New York)</p>
                      <MDBBtn
                        color="primary"
                        size="sm"
                        @click="
                          $refs.customRowsEditorRef.addRow({
                            company: 'D&D Inc.',
                            address: '14 Street 67',
                            city: 'New York',
                          })
                        "
                      >
                        Load into table
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="3" sm="6" class="p-3">
                      <h4>Thomas & Co.</h4>
                      <p>(2 Avenue 54, New York)</p>
                      <MDBBtn
                        color="primary"
                        size="sm"
                        @click="
                          $refs.customRowsEditorRef.addRow({
                            company: 'Thomas & Co.',
                            address: '2 Avenue 54',
                            city: 'New York',
                          })
                        "
                      >
                        Load into table
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                  <hr class="mt-3" />
                  <MDBTableEditor
                    v-model:dataset="customRowsData"
                    :search="customRowsSearch"
                    v-model:edit="customRowsEdit"
                    ref="customRowsEditorRef"
                  />
                </template>
              </code>
              <code data-lang="javascript" data-name="script">
                <script>
                  import { MDBInput, MDBBtn, MDBIcon, MDBCol, MDBRow, MDBTableEditor } from "mdb-vue-ui-kit";
                  import { ref } from "vue";

                  export default {
                    components: {
                      MDBInput, MDBBtn, MDBIcon, MDBCol, MDBRow, MDBTableEditor
                    },
                    setup() {
                      const customRowsEditorRef = ref(null);
                      const customRowsSearch = ref("");
                      const customRowsEdit = ref(false);
                      const customRowsData = ref({
                        columns: [
                          {
                            width: 250,
                            label: "Company",
                            field: "company",
                          },
                          {
                            width: 250,
                            label: "Address",
                            field: "address",
                          },
                          {
                            width: 250,
                            label: "City",
                            field: "city",
                          },
                        ],
                        rows: [
                          { company: "Smith & Johnson", address: "Park Lane 2", city: "London" },
                          { company: "P.J. Company", address: "Oak Street 7", city: "Aberdeen" },
                          {
                            company: "Food & Wine",
                            address: "Netherhall Gardens 3",
                            city: "Hampstead",
                          },
                          { company: "IT Service", address: "Warwick Road 14", city: "London" },
                          {
                            company: "A. Jonson Gallery",
                            address: "Oaklands Avenue 2",
                            city: "London",
                          },
                          {
                            company: "F.A. Architects",
                            address: "Frognal Way 7",
                            city: "Hampstead",
                          },
                        ],
                      });

                      return {
                        customRowsEditorRef,
                        customRowsSearch,
                        customRowsEdit,
                        customRowsData
                      }
                    }           
                  };
                </script>
              </code>
            </mdbsnippet>
          </pre> -->
        </section>
        <!--Section: Code-->
      </section>
      <!--Section: Custom rows-->

      <hr class="my-5" />

      <!--Section: Notifications-->
      <section id="section-notifications">
        <!-- Section title -->
        <h2 class="mb-4">Notifications</h2>

        <p class="mb-4">
          In this example, handlers for custom events trigger notifications
          after adding/deleting/updating an entry.
        </p>

        <!--Section: Demo-->
        <section class="border p-4 mb-4">
          <div class="d-flex justify-content-end mb-4">
            <MDBInput
              v-model="notificationsSearch"
              label="Search"
              :disabled="notificationsEdit"
            />
            <MDBBtn
              color="primary"
              size="sm"
              class="ms-3"
              @click="$refs.notificationsEditorRef.addRow()"
              :disabled="notificationsEdit"
              ><MDBIcon icon="plus"></MDBIcon
            ></MDBBtn>
          </div>
          <hr />
          <MDBTableEditor
            v-model:dataset="notificationsData"
            :search="notificationsSearch"
            v-model:edit="notificationsEdit"
            ref="notificationsEditorRef"
            @add="showNotification('success', 'New entry: ', $event)"
            @delete="showNotification('danger', 'Deleted entry: ', $event)"
            @updateEntry="
              showNotification('primary', 'Updated entry: ', $event)
            "
          />
          <MDBAlert
            v-model="alert"
            :color="alertColor"
            position="top-right"
            width="360px"
            :delay="2000"
            autohide
          >
            <div v-html="alertMessage" />
          </MDBAlert>
        </section>
        <!--Section: Demo-->

        <!--Section: Code-->
        <section>
          <!-- prettier-ignore -->
          <!-- <pre v-pre>
            <mdbsnippet>
              <code data-lang="html" data-name="template">
                <template>
                    <div class="d-flex justify-content-end mb-4">
                    <MDBInput
                      v-model="notificationsSearch"
                      label="Search"
                      :disabled="notificationsEdit"
                    />
                    <MDBBtn
                      color="primary"
                      size="sm"
                      class="ms-3"
                      @click="$refs.notificationsEditorRef.addRow()"
                      :disabled="notificationsEdit"
                      ><MDBIcon icon="plus"></MDBIcon
                    ></MDBBtn>
                  </div>
                  <hr />
                  <MDBTableEditor
                    v-model:dataset="notificationsData"
                    :search="notificationsSearch"
                    v-model:edit="notificationsEdit"
                    ref="notificationsEditorRef"
                    @add="showNotification('success', 'New entry: ', $event)"
                    @delete="showNotification('danger', 'Deleted entry: ', $event)"
                    @updateEntry="
                      showNotification('primary', 'Updated entry: ', $event)
                    "
                  />
                  <MDBAlert
                    v-model="alert"
                    :color="alertColor"
                    position="top-right"
                    width="360px"
                    :delay="2000"
                    autohide
                  >
                    <div v-html="alertMessage" />
                  </MDBAlert>
                </template>
              </code>
              <code data-lang="javascript" data-name="script">
                <script>
                  import { MDBInput, MDBBtn, MDBIcon, MDBAlert, MDBTableEditor } from "mdb-vue-ui-kit";
                  import { ref } from "vue";

                  export default {
                    components: {
                      MDBInput, MDBBtn, MDBIcon, MDBAlert, MDBTableEditor
                    },
                    setup() {
                      const notificationsEditorRef = ref(null);
                      const notificationsSearch = ref("");
                      const notificationsEdit = ref(false);
                      const notificationsData = ref({
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
                        ]
                      });

                      const alert = ref(false);
                      const alertColor = ref("primary");
                      const alertMessage = ref("");

                      const showNotification = (type, message, event) => {
                        const { company, office } = event.row;
                        alertMessage.value = `<strong>${message}</strong> ${company} ${office}`;
                        alertColor.value = type;
                        alert.value = true;
                      };

                      return {
                        showNotification,
                        notificationsEditorRef,
                        notificationsSearch,
                        notificationsEdit,
                        notificationsData,
                        alert,
                        alertColor,
                        alertMessage
                      }
                    }           
                  };
                </script>
              </code>
            </mdbsnippet>
          </pre> -->
        </section>
        <!--Section: Code-->
      </section>
      <!--Section: Notifications-->

      <hr class="my-5" />

      <!--Section: Dark-->
      <section id="section-dark">
        <!-- Section title -->
        <h2 class="mb-4">Dark</h2>

        <p class="mb-4">
          Dark mode can be applied to both modal and inline versions - firstly,
          pass the color class name to the
          <code>color</code> property of your Table Editor (f.e. 'bg-dark'). Now
          change the font to light by setting <code>dark</code> property to
          <code>true</code>.
        </p>
        <p class="note note-primary">
          <strong>Tip:</strong> add <code>white</code> property to your search
          input.
        </p>

        <!--Section: Demo-->
        <section class="border p-4 mb-4 bg-dark">
          <div class="d-flex justify-content-end mb-4">
            <MDBInput
              v-model="darkSearch"
              label="Search"
              :disabled="darkEdit"
              white
            />
            <MDBBtn
              color="primary"
              size="sm"
              class="ms-3"
              @click="$refs.darkEditorRef.addRow()"
              :disabled="darkEdit"
              ><MDBIcon icon="plus"></MDBIcon
            ></MDBBtn>
          </div>
          <hr />
          <MDBTableEditor
            v-model:dataset="darkData"
            :search="darkSearch"
            v-model:edit="darkEdit"
            color="bg-dark"
            dark
            ref="darkEditorRef"
            @add="showNotification('success', 'New entry: ', $event)"
            @delete="showNotification('danger', 'Deleted entry: ', $event)"
            @updateEntry="
              showNotification('primary', 'Updated entry: ', $event)
            "
          />
        </section>

        <!--Section: Demo-->

        <!--Section: Code-->
        <section>
          <!-- prettier-ignore -->
          <!-- <pre v-pre>
            <mdbsnippet>
              <code data-lang="html" data-name="template">
                <template>
                  <div class="d-flex justify-content-end mb-4">
                    <MDBInput
                      v-model="darkSearch"
                      label="Search"
                      :disabled="darkEdit"
                      white
                    />
                    <MDBBtn
                      color="primary"
                      size="sm"
                      class="ms-3"
                      @click="$refs.darkEditorRef.addRow()"
                      :disabled="darkEdit"
                      ><MDBIcon icon="plus"></MDBIcon
                    ></MDBBtn>
                  </div>
                  <hr />
                  <MDBTableEditor
                    v-model:dataset="darkData"
                    :search="darkSearch"
                    v-model:edit="darkEdit"
                    color="bg-dark"
                    dark
                    ref="darkEditorRef"
                    @add="showNotification('success', 'New entry: ', $event)"
                    @delete="showNotification('danger', 'Deleted entry: ', $event)"
                    @updateEntry="
                      showNotification('primary', 'Updated entry: ', $event)
                    "
                  />
                </template>
              </code>
              <code data-lang="javascript" data-name="script">
                <script>
                  import { MDBInput, MDBBtn, MDBIcon, MDBTableEditor } from "mdb-vue-ui-kit";
                  import { ref } from "vue";

                  export default {
                    components: {
                      MDBInput, MDBBtn, MDBIcon, MDBTableEditor
                    },
                    setup() {
                      const darkEditorRef = ref(null);
                      const darkSearch = ref("");
                      const darkEdit = ref(false);
                      const darkData = ref({
                        columns: [
                          {
                            width: 250,
                            label: "Company",
                            field: "company"
                          },
                          {
                            width: 250,
                            sort: false,
                            defaultValue: "Warsaw",
                            options: ["London", "Warsaw", "New York"],
                            inputType: "select",
                            label: "Office",
                            field: "office"
                          },
                          {
                            width: 250,
                            inputType: "number",
                            defaultValue: 1,
                            label: "Employees",
                            field: "employees"
                          },
                          {
                            width: 100,
                            defaultValue: false,
                            inputType: "checkbox",
                            label: "International",
                            field: "international"
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
                          }
                        ]
                      });

                      return {
                        darkEditorRef,
                        darkSearch,
                        darkEdit,
                        darkData
                      }
                    }           
                  };
                </script>
              </code>
            </mdbsnippet>
          </pre> -->
        </section>
        <!--Section: Code-->
      </section>
      <!--Section: Dark-->
    </template>
    <template #overview-scrollspy>
      <li class="nav-item">
        <a class="nav-link active" href="#section-introduction">Introduction</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#section-basic-example">Basic example</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#section-modal">Modal</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#section-inputs">Inputs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#section-disable-edit">Disable edit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#section-confirm-delete">Confirm delete</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#section-advanced-search">Advanced search</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#section-async-data">Async data</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#section-custom-rows">Custom rows</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#section-notifications">Notifications</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#section-dark">Dark</a>
      </li>
    </template>
  </Docs>
</template>

<script>
import { onMounted, ref } from "vue";
import { formatPre } from "@/utils/formatPre";
import Docs from "@/utils/docs";
import MDBTableEditor from "@/components/MDBTableEditor";
import {
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBSelect,
  MDBCol,
  MDBAlert,
  MDBRow,
} from "mdb-vue-ui-kit";

export default {
  components: {
    MDBTableEditor,
    MDBInput,
    MDBBtn,
    MDBIcon,
    MDBSelect,
    MDBCol,
    MDBAlert,
    MDBRow,
    Docs,
  },
  setup() {
    const mainTitle = "Table editor";
    const seoTitle = "Vue Table editor";
    const description =
      "Responsive interactive built with the latest Bootstrap 5. Creates editable tables. Delete or edit rows directly or via modal editor.";

    onMounted(() => {
      formatPre();
    });

    const advancedData = ref({
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

    const basicEditorRef = ref(null);
    const basicSearch = ref("");
    const basicEdit = ref(false);
    const basicData = ref({
      columns: [
        { width: 250, label: "Company", field: "company" },
        { width: 250, label: "Address", field: "address" },
        { width: 250, label: "Employees", field: "employees" },
      ],
      rows: [
        {
          company: "Smith & Johnson",
          address: "Park Lane 2, London",
          employees: "30",
        },
        {
          company: "P.J. Company",
          address: "Oak Street 7, Aberdeen",
          employees: "80",
        },
        {
          company: "Food & Wine",
          address: "Netherhall Gardens 3, Hampstead",
          employees: "12",
        },
        {
          company: "IT Service",
          address: "Warwick Road 14, London",
          employees: "17",
        },
        {
          company: "A. Jonson Gallery",
          address: "Oaklands Avenue 2, London",
          employees: "4",
        },
        {
          company: "F.A. Architects",
          address: "Frognal Way 7, Hampstead",
          employees: "4",
        },
      ],
    });

    const modalEditorRef = ref(null);
    const modalSearch = ref("");
    const modalEdit = ref(false);
    const modalData = ref(advancedData.value);

    const inputsEditorRef = ref(null);
    const inputsSearch = ref("");
    const inputsEdit = ref(false);
    const inputsData = ref(advancedData.value);

    const disabledEditorRef = ref(null);
    const disabledSearch = ref("");
    const disabledEdit = ref(false);
    const disabledData = ref({
      columns: [...advancedData.value.columns].map((column) => {
        return {
          ...column,
          editable: false,
        };
      }),
      rows: [...advancedData.value.rows],
    });

    const confirmEditorRef = ref(null);
    const confirmSearch = ref("");
    const confirmEdit = ref(false);
    const confirmData = ref(advancedData.value);

    const advancedSearchEditorRef = ref(null);
    const advancedSearchQuery = ref("");
    const advancedSearchEdit = ref(false);
    const advancedSearchData = ref(advancedData.value);
    const advancedSearchQueryCols = ref([
      { text: "Company", value: "company" },
      { text: "Office", value: "office" },
    ]);
    const advancedSearchSelectedValue = ref("");
    const advancedSearchQueryPhrase = ref("");
    const advancedSearchSelectedCols = ref([]);

    const searchAdvanced = () => {
      advancedSearchQueryPhrase.value = advancedSearchQuery.value;

      advancedSearchSelectedCols.value =
        advancedSearchSelectedValue.value.split(",");
    };

    const asyncEditorRef = ref(null);
    const asyncSearch = ref("");
    const asyncEdit = ref(false);
    const asyncData = ref({
      columns: [
        { label: "Company", field: "company" },
        { label: "Email", field: "email" },
        { label: "Name", field: "name" },
        { label: "Phone", field: "phone" },
      ],
      rows: [],
    });
    const loadingAsync = ref(false);

    const loadAsyncData = () => {
      asyncData.value.rows = [];

      loadingAsync.value = true;

      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => {
            asyncData.value.rows = data.map((user) => ({
              ...user,
              address: `${user.address.city}, ${user.address.street}`,
              company: user.company.name,
            }));
            loadingAsync.value = false;
          });
      }, 2000);
    };

    const customRowsEditorRef = ref(null);
    const customRowsSearch = ref("");
    const customRowsEdit = ref(false);
    const customRowsData = ref({
      columns: [
        {
          width: 250,
          label: "Company",
          field: "company",
        },
        {
          width: 250,
          label: "Address",
          field: "address",
        },
        {
          width: 250,
          label: "City",
          field: "city",
        },
      ],
      rows: [
        { company: "Smith & Johnson", address: "Park Lane 2", city: "London" },
        { company: "P.J. Company", address: "Oak Street 7", city: "Aberdeen" },
        {
          company: "Food & Wine",
          address: "Netherhall Gardens 3",
          city: "Hampstead",
        },
        { company: "IT Service", address: "Warwick Road 14", city: "London" },
        {
          company: "A. Jonson Gallery",
          address: "Oaklands Avenue 2",
          city: "London",
        },
        {
          company: "F.A. Architects",
          address: "Frognal Way 7",
          city: "Hampstead",
        },
      ],
    });

    const notificationsEditorRef = ref(null);
    const notificationsSearch = ref("");
    const notificationsEdit = ref(false);
    const notificationsData = ref(advancedData.value);
    const alert = ref(false);
    const alertColor = ref("primary");
    const alertMessage = ref("");

    const showNotification = (type, message, event) => {
      const { company, office } = event.row;
      alertMessage.value = `<strong>${message}</strong> ${company} ${office}`;
      alertColor.value = type;
      alert.value = true;
    };

    const darkEditorRef = ref(null);
    const darkSearch = ref("");
    const darkEdit = ref(false);
    const darkData = ref(advancedData.value);

    return {
      showNotification,
      basicEdit,
      basicEditorRef,
      basicSearch,
      basicData,
      modalEdit,
      modalEditorRef,
      modalSearch,
      modalData,
      inputsEdit,
      inputsEditorRef,
      inputsSearch,
      inputsData,
      disabledEdit,
      disabledEditorRef,
      disabledSearch,
      disabledData,
      confirmEdit,
      confirmEditorRef,
      confirmSearch,
      confirmData,
      advancedSearchEditorRef,
      advancedSearchEdit,
      advancedSearchData,
      advancedSearchQuery,
      advancedSearchQueryCols,
      advancedSearchSelectedValue,
      advancedSearchSelectedCols,
      advancedSearchQueryPhrase,
      searchAdvanced,
      asyncEditorRef,
      asyncSearch,
      asyncEdit,
      asyncData,
      loadingAsync,
      loadAsyncData,
      customRowsEditorRef,
      customRowsSearch,
      customRowsEdit,
      customRowsData,
      notificationsEditorRef,
      notificationsSearch,
      notificationsEdit,
      notificationsData,
      alert,
      alertColor,
      alertMessage,
      darkEditorRef,
      darkSearch,
      darkEdit,
      darkData,
      mainTitle,
      seoTitle,
      description,
    };
  },
};
</script>

<style lang="scss">
@import "./scss/variables";
@import "./scss/table-editor";
</style>
