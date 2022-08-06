<script>
import { ref, watchEffect } from "vue";
import {
  MDBInput, 
  MDBCheckbox, 
  MDBBtn,
  MDBIcon,
  MDBSelect,
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-vue-ui-kit";
import MDBTableEditor from "./MDBTableEditor3";

import _ from "lodash";
import { apiTables } from "./data";

export default {
  props: {
    tabId: String,
  },
  components: {
    MDBInput,
    MDBCheckbox,
    MDBSelect,
    MDBBtn,
    MDBIcon,
    MDBTableEditor,
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
  },
  setup(props) {

    const asyncData = ref({
      columns: [
        { label: "Company", field: "company", visible: true },
        { label: "Office", field: "office", visible: true },
        { label: "Employees", field: "employees", visible: true },
        { label: "international", field: "international", visible: true },
      ],
      rows: [],
    });

    const asyncEdit = ref(false); //編輯中

    const loadingAsync = ref(false);
    const loadAsyncData = () => {
      var ytimer = setTimeout(() => {
        console.log("ytimer");
        const tabId = props.tabId;
        console.log("tabId", tabId);
        if (tabId && tabId.length > 0) {
          const apidata = _.filter(apiTables, (o) => o.split_id == tabId);
          console.log("apidata", apidata);
          if (apidata && apidata.length > 0) {
            const splitdata = apidata[0].split_data;
            if (splitdata) {
              console.log("splitdata", splitdata); 
              //splitdata.columns = _.map(splitdata.columns, o => _.extend({visible: true}, o));
              asyncData.value.rows = splitdata.rows; 
              asyncSearchData.value = asyncData.value;
              loadingAsync.value = true;
              clearTimeout(ytimer);
            } else {
              console.log("未獲取splitdata");
            }
          } else {
            console.log("未獲取apidata");
          }
        } else {
          console.log("未獲取tabId");
        }
      }, 1000);
    };

    const asyncSearchEditorRef = ref(null);
    const asyncSearchQuery = ref("");
    const asyncSearchEdit = ref(false); //搜尋中
    const asyncSearchData = ref(asyncData.value);
    const asyncSearchQueryCols = ref([
      { text: "Company", value: "company" },
      { text: "Office", value: "office" },
      { text: "Employees", value: "employees" },
      { text: "international", value: "international" },
    ]);
    const asyncSearchSelectedValue = ref("");
    const asyncSearchQueryPhrase = ref("");
    const asyncSearchSelectedCols = ref([]);

    const searchasync = () => { 
      asyncSearchQueryPhrase.value = asyncSearchQuery.value;
      asyncSearchSelectedCols.value = asyncSearchSelectedValue.value.split(","); 
      asyncSearchEdit.value = true;
    };

    const searchcancel = () => {
      asyncSearchQuery.value = "";
      asyncSearchQueryPhrase.value = "";
      asyncSearchSelectedCols.value = [];
      asyncSearchSelectedValue.value = "";
      asyncSearchEdit.value = false;
    };

    const TableModal = ref(false);

    watchEffect(() => {
      if (props.tabId) {
        loadAsyncData();
      }
    });

    return {
      asyncData,
      asyncEdit,
      loadingAsync,
      asyncSearchEditorRef,
      asyncSearchEdit,
      asyncSearchData,
      asyncSearchQuery,
      asyncSearchQueryCols,
      asyncSearchSelectedValue,
      asyncSearchSelectedCols,
      asyncSearchQueryPhrase,
      searchasync,
      searchcancel,
      TableModal
    };
  },
};
</script>

<template>
  <div class="d-flex justify-content-between mb-4">
    <div class="d-inline-flex align-items-center">
      <MDBInput
        v-model="asyncSearchQuery"
        label="Search"
        :disabled="asyncEdit"
      />
      <div class="px-3 mt-1">in:</div>
      <MDBSelect
        v-model:options="asyncSearchQueryCols"
        v-model:selected="asyncSearchSelectedValue"
        :disabled="asyncEdit"
        multiple
      />
      <MDBBtn
        outline="primary"
        size="sm"
        class="h-100 ms-1"
        @click="searchasync"
      >
        <MDBIcon icon="search" />
      </MDBBtn>
      <MDBBtn 
        v-if="asyncSearchEdit"
        outline="primary"
        size="sm"
        class="h-100 ms-1"
        @click="searchcancel"
      >
        <MDBIcon icon="close" />
      </MDBBtn>
      <MDBBtn
        color="primary"
        size="sm"
        class="h-100 ms-1"
        @click="$refs.asyncSearchEditorRef.addRow()"
        :disabled="asyncEdit"
      >
        <MDBIcon icon="plus" />
      </MDBBtn>
    </div>
    <div class="d-inline-flex align-items-center">
      <MDBBtn
        color="primary"
        size="sm"
        class="h-100 ms-1"
        :disabled="asyncEdit"
      >
        <MDBIcon icon="refresh" />
      </MDBBtn>
      <MDBBtn
        color="primary"
        size="sm"
        class="h-100 ms-1" 
        aria-controls="TableModal"
        @click="TableModal = true"
        :disabled="asyncEdit"
      >
        <MDBIcon icon="table" />
      </MDBBtn>
    </div>
  </div>
  <MDBTableEditor
    v-model:dataset="asyncSearchData" 
    v-model:edit="asyncEdit"
    :loading="loadingAsync.value"
    :search="asyncSearchQueryPhrase"
    :searchColumns="asyncSearchSelectedCols"
    :entries="5"
    :entriesOptions="[5, 10, 15]"
    ref="asyncSearchEditorRef"
  />
  <MDBModal
    id="TableModal"
    tabindex="-1"
    labelledby="TableModalTitle"
    v-model="TableModal"
    centered 
    scrollable 
  >
    <MDBModalHeader>
      <MDBModalTitle id="TableModalTitle">欄位顯示設定</MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
      <MDBCheckbox 
        v-for="col in asyncSearchData.columns" 
        v-model="col.visible"
        :key="col.field" 
        :label="col.label" 
      />
    </MDBModalBody>
  </MDBModal>
</template>