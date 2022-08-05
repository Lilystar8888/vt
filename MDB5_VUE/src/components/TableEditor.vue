<script>
import { ref, watchEffect } from "vue";
import { MDBInput, MDBBtn, MDBIcon, MDBSelect } from "mdb-vue-ui-kit";
import MDBTableEditor from "./MDBTableEditor2";

import _ from 'lodash';
import { apiTables } from "./data";

export default {
  props: {
    tabId: String,
  },
  components: {
    MDBInput,
    MDBSelect,
    MDBBtn,
    MDBIcon,
    MDBTableEditor,
  },
  setup(props) {
    const asyncData = ref({
      columns: [
        { label: "Company", field: "company" },
        { label: "Office", field: "office" },
        { label: "Employees", field: "employees" },
        { label: "international", field: "international" },
      ],
      rows: [],
    });

    const loadingAsync = ref(false);
    const loadAsyncData = () => {
      var ytimer = setTimeout(() => {
        console.log("ytimer");
        const tabId = props.tabId;
        console.log("tabId", tabId);
        if(tabId && tabId.length>0){
          const apidata = _.filter(apiTables, o => o.split_id == tabId);
          console.log("apidata", apidata);
          if (apidata && apidata.length>0) {
            const splitdata = apidata[0].split_data;
            if(splitdata){
              console.log("splitdata", splitdata);
              asyncData.value = splitdata;
              asyncSearchData.value = splitdata;
              loadingAsync.value = true;
              clearTimeout(ytimer);
            }else{
            console.log('未獲取splitdata');
          }
          }else{
            console.log('未獲取apidata');
          }
        }else{
          console.log('未獲取tabId');
        }
      }, 1000);
    };

    const asyncSearchEditorRef = ref(null);
    const asyncSearchQuery = ref("");
    const asyncSearchEdit = ref(false);
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
    };

    watchEffect(()=>{
      if(props.tabId){
        loadAsyncData();
      }
    })

    return {
      asyncData,
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
        :disabled="asyncSearchEdit"
      />
      <div class="px-3 mt-1">in:</div>
      <MDBSelect
        v-model:options="asyncSearchQueryCols"
        v-model:selected="asyncSearchSelectedValue"
        :disabled="asyncSearchEdit"
        multiple
      />
      <MDBBtn outline="primary" size="sm" class="h-100 ms-3" @click="searchasync">
        <MDBIcon icon="search" />
      </MDBBtn>
    </div>
    <div class="d-inline-flex align-items-center">
      <MDBBtn
        color="primary"
        size="sm"
        class="h-100 ms-1"
        :disabled="asyncSearchEdit"
      >
        <MDBIcon icon="refresh"/>
      </MDBBtn>
      <MDBBtn
        color="primary"
        size="sm"
        class="h-100 ms-3"
        @click="$refs.asyncSearchEditorRef.addRow()"
        :disabled="asyncSearchEdit"
      >
        <MDBIcon icon="plus"/>
      </MDBBtn>
    </div>
  </div>
  <hr />
  <MDBTableEditor
    v-model:dataset="asyncSearchData"
    :loading="loadingAsync.value"
    :search="asyncSearchQueryPhrase"
    :searchColumns="asyncSearchSelectedCols"
    :asyncSearchEdit="asyncSearchEdit"
    :entries="5"
    :entriesOptions="[5, 10, 15]"
    v-model:edit="asyncSearchEdit"
    ref="asyncSearchEditorRef"
  />
</template>