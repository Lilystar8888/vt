<script>
import { 
  computed, 
  ref, 
  onMounted, 
  watch, 
  nextTick 
} from "vue";

import {
  MDBSelect,
  MDBCheckbox,
  MDBBtn,
  MDBScrollbar,
  MDBInput,
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBPopconfirm,
} from "mdb-vue-ui-kit";

import MDBRowsEditor from "./MDBRowsEditor";
import MDBActionButtons from "./MDBActionButtons";
import { VueDraggableNext } from "vue-draggable-next";

export default {
  name: "MDBTableEditor",
  components: {
    MDBSelect,
    MDBCheckbox,
    MDBBtn,
    MDBScrollbar,
    MDBInput,
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBRowsEditor,
    MDBPopconfirm,
    MDBActionButtons,
    VueDraggableNext
  },
  props: {
    actionHeader: {
      type: String,
      default: "Actions",
    },
    actionPosition: {
      type: String,
      default: "end",
    },
    bordered: Boolean,
    borderless: Boolean,
    borderColor: String,
    cancelText: {
      type: String,
      default: "Cancel",
    },
    confirmText: {
      type: String,
      default: "Delete",
    },
    confirmMessage: {
      type: String,
      default: "Are you sure you want to delete this entry?",
    },
    clickableRows: Boolean,
    color: String,
    confirm: Boolean,
    dark: Boolean,
    defaultValue: {
      type: String,
      default: "",
    },
    dataset: {
      type: Object,
      default() {
        return {
          columns: [],
          rows: [],
        };
      },
    },
    edit: Boolean,
    entries: {
      type: Number,
      default: 10,
    },
    entriesOptions: {
      type: Array,
      default: () => [10, 25, 50, 200],
    },
    fixedHeader: Boolean,
    fullPagination: Boolean,
    hover: Boolean,
    loaderClass: {
      type: String,
      default: "bg-primary",
    },
    loading: Boolean,
    loadingMessage: {
      type: String,
      default: "Loading results...",
    },
    maxHeight: [Number, String],
    maxWidth: {
      type: [Number, String],
      default: "100%",
    },
    mode: {
      type: String,
      default: "inline",
    },
    multi: Boolean,
    newItemHeader: {
      type: String,
      default: "New item",
    },
    noFoundMessage: {
      type: String,
      default: "No matching results found",
    },
    pagination: {
      type: Boolean,
      default: true,
    },
    rowsText: {
      type: String,
      default: "Rows per page:",
    },
    saveText: {
      type: String,
      default: "Save",
    },
    search: String,
    searchColumns: {
      type: [Array, String],
      default: () => [],
    },
    selectable: Boolean,
    sm: Boolean,
    sortField: String,
    sortOrder: String,
    striped: Boolean,
    tag: {
      type: String,
      default: "div",
    },
    advancedSearchEdit: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    "render",
    "selected-rows",
    "selected-indexes",
    "all-selected",
    "row-click",
    "update",
    "edit",
    "exit",
    "update:dataset",
    "update:edit",
    "add",
    "delete",
    "update-entry",
  ],
  setup(props, { slots, emit }) {
    // Defaults
    const className = computed(() => [
      "table-editor",
      props.mode !== "modal" && editMode.value && "edited-table",
      props.color,
      props.bordered && "bordered",
      props.borderColor && `border-${props.borderColor}`,
      props.borderless && "borderless",
      props.clickableRows && "clickable-rows",
      props.dark && "dark",
      props.hover && "hover",
      props.loading && "loading",
      props.sm && "sm",
      props.striped && "striped",
    ]);
    const height = computed(() =>
      typeof props.maxHeight === "number"
        ? props.maxHeight + "px"
        : props.maxHeight
    );
    const width = computed(() =>
      typeof props.maxWidth === "number"
        ? props.maxWidth + "px"
        : props.maxWidth
    );
    const data = ref({});
    const tbodyRef = ref(null);
    const rowsPerPage = ref(props.entries);
    const pageKey = ref(0);
    const pages = computed(() =>
      data.value.rows
        ? Math.ceil(data.value.rows.length / rowsPerPage.value)
        : 1
    );
    const firstRowIndex = computed(() =>
      data.value.rows ? pageKey.value * rowsPerPage.value + 1 : 1
    );
    const lastRowIndex = computed(() =>
      data.value.rows
        ? pageKey.value === pages.value - 1
          ? data.value.rows.length
          : pageKey.value * rowsPerPage.value + rowsPerPage.value
        : rowsPerPage.value
    );
    const selectOptions = ref(
      props.entriesOptions.map((entry) => {
        return {
          text: entry,
          value: entry,
          selected: entry === rowsPerPage.value,
        };
      })
    );
    const datatableKey = ref(0);
    let defaultData = {};

    // Getting data
    onMounted(() => {
      if (slots.default && slots.default()[0].type === "table") {
        getDataFromSlot(slots.default()[0]);
      } else {
        getDataFromProps();
      }
    });
    if (slots.default) {
      watch(
        () => slots.default(),
        () => {
          if (
            slots.default().length > 0 &&
            slots.default()[0].type === "table"
          ) {
            getDataFromSlot(slots.default()[0]);
          }
        }
      );
    } else {
      watch(
        () => props.dataset,
        () => {
          getDataFromProps();
          sort();
        },
        { deep: true }
      );
    }
    watch(
      () => rowsPerPage.value,
      () => {
        pageKey.value = 0;
        datatableKey.value++;
      }
    );

    // Setting data
    const setData = (columns, rows) => {
      data.value.columns = columns;
      data.value.rows = rows;

      setDefaultData(columns, rows);
      nextTick(() => emit("render", data.value));
    };
    const setDefaultData = (columns, rows) => {
      defaultData.columns = [...columns];
      defaultData.rows = [...rows];
    };
    const getGeneratedColumns = () => {
      if (props.dataset.columns[0].field) {
        return [...props.dataset.columns];
      } else {
        return props.dataset.columns.map((th) => {
          return {
            label: th,
            field: th.toLowerCase(),
          };
        });
      }
    };
    const getGeneratedRows = (columns) => {
      let rows = [];
      if (props.dataset.rows[0][columns[0].field]) {
        rows = [...props.dataset.rows];
        rows.forEach((row, key) => {
          rows[key].mdbIndex = key;
          rows[key].selected = false;
        });
      } else {
        const rowsArr = props.dataset.rows.map((tr) => tr);
        rowsArr.forEach((row, key) => {
          rows.push({});
          row.forEach((td, tdKey) => {
            rows[key][columns[tdKey].field] = td;
            rows[key].mdbIndex = key;
            rows[key].selected = false;
          });
        });
      }

      return rows;
    };
    const setColMarginsAndFormats = (columns, formattedColumns) => {
      let colMarginLeft = -columns[0].width || 0;
      const colLeftMargins = columns.map((col) => {
        colMarginLeft += col.fixed ? col.width || 0 : 0;
        return colMarginLeft;
      });
      columns.forEach((col, key) => {
        if (col.fixed && col.fixed === "right") {
          col.right = true;
        }

        if ("format" in col) {
          formattedColumns.push({ field: col.field, rules: col.format.value });
        }

        col.left = colLeftMargins[key];
      });
    };
    const formatCells = (rows, formattedColumns) => {
      rows.forEach((row, key) => {
        row.formats = {};
        formattedColumns.forEach((col) => {
          row.formats[col.field] = col.rules[key];
        });
      });
    };
    const getDataFromSlot = (slot) => {
      const columns = slot.children[0].children[0].children.map((th) => {
        return {
          label: th.children,
          field: th.children.toLowerCase(),
          sort:
            th.props && th.props["data-mdb-sort"] === "false" ? false : true,
        };
      });
      const rows = [];
      let rowsObj = slot.children[1].children.map((tr) => tr.children);
      rowsObj.forEach((row, key) => {
        rows.push({});
        row.forEach((td, tdKey) => {
          rows[key][columns[tdKey].field] = td.children;
          rows[key].mdbIndex = key;
          rows[key].selected = false;
        });
      });

      setData(columns, rows);
    };
    const getDataFromProps = () => {
      let columns = [];
      let rows = [];

      if (props.dataset.columns && props.dataset.columns.length > 0) {
        columns = getGeneratedColumns();
      }
      if (props.dataset.rows && props.dataset.rows.length > 0) {
        rows = getGeneratedRows(columns);
      }

      // Formatting
      let formattedColumns = [];
      setColMarginsAndFormats(columns, formattedColumns);
      if (formattedColumns.length > 0) {
        formatCells(rows, formattedColumns);
      }

      setData(columns, rows);
    };

    // Table Editor
    const editMode = ref(false);
    const newRow = ref(null);
    const tempValues = ref({});
    const modalEditor = ref(false);

    const createEmptyRow = () => {
      const row = {};

      data.value.columns.forEach((column) => {
        row[column.field] = "";
      });

      row.mdbIndex = -1;
      row.selected = false;

      return row;
    };

    const editRow = (index) => {
      editMode.value = true;
      emit("edit");
      emit("update:edit", true);

      const rowToSelectIndex = data.value.rows.findIndex(
        (row) => row.mdbIndex === index
      );

      if (rowToSelectIndex > -1) {
        data.value.rows[rowToSelectIndex] = {
          ...data.value.rows[rowToSelectIndex],
          selected: true,
        };
        tempValues.value = { ...data.value.rows[rowToSelectIndex] };
      }

      if (props.mode === "modal") {
        modalEditor.value = true;
      }
    };

    const addRow = (customRow = {}) => {
      newRow.value = {
        ...createEmptyRow(),
        ...customRow,
        mdbIndex: -1,
        selected: false,
      };
      data.value.rows.unshift(newRow.value);
      editRow(-1);
    };

    const updateTempValue = (e) => {
      const { value, field } = e;
      tempValues.value[field] = value;
    };

    const updateRowValues = (rowIndex) => {
      if (rowIndex === -1) {
        // means mdbIndex === -1 and it is new row
        rowIndex = 0;
      }

      const rowHasEmptyValues = Object.values(tempValues.value).filter(
        (value) => value === null || value === ""
      );

      if (rowHasEmptyValues.length) {
        discardUpdate();
        return;
      }

      data.value.columns.forEach((col) => {
        data.value.rows[rowIndex][col.field] = tempValues.value[col.field];
      });

      if (selectedIndexes.value[0] === -1) {
        emit("add", { row: data.value.rows[rowIndex] });
      } else {
        emit("update-entry", { row: data.value.rows[rowIndex] });
      }

      nextTick(() => {
        recalculateIndexes();
        updateDefaultData();
        sort();
        emit("update", data.value);
        updateDatasetValue();
        tempValues.value = {};
      });

      resetState();
    };

    const discardUpdate = () => {
      if (selectedIndexes.value[0] === -1) {
        // means mdbIndex === -1 and it is new row
        removeNewRow();
      }

      resetState();
    };

    const recalculateIndexes = () => {
      data.value.rows = data.value.rows.map((row, i) => ({
        ...row,
        mdbIndex: i,
      }));
    };

    const updateDefaultData = () => {
      defaultData.rows = [...data.value.rows];
    };

    const removeNewRow = () => {
      data.value.rows.splice(0, 1);
      resetState();
    };

    const resetState = () => {
      data.value.rows.map((row) => (row.selected = false));

      editMode.value = false;
      modalEditor.value = false;
      tempValues.value = {};
      emit("update:edit", false);
      emit("exit");
    };

    const updateDatasetValue = () => {
      // prevent from updating data if passed by slot
      if (slots.default && slots.default()[0].type === "table") {
        return;
      }

      let newRows = [...data.value.rows];
      newRows = newRows.map((row) => {
        delete row.mdbIndex;
        delete row.selected;

        return row;
      });

      let newCols = [...props.dataset.columns];
      newCols = newCols.map((col) => {
        delete col.left;

        return col;
      });

      const newDataset = { columns: newCols, rows: newRows };
      emit("update:dataset", newDataset);
    };

    const deleteRow = (rowIndex) => {
      const rowToRemoveIndex = data.value.rows.findIndex(
        (row) => row.mdbIndex === rowIndex
      );

      if (rowToRemoveIndex > -1) {
        emit("delete", { row: data.value.rows[rowToRemoveIndex] });
        data.value.rows.splice(rowToRemoveIndex, 1);

        nextTick(() => {
          recalculateIndexes();
          updateDefaultData();
          sort();
          emit("update", data.value);
          updateDatasetValue();
        });
      }
    };

    // Sort
    const orderBy = ref(props.sortOrder || null);
    const orderKey = ref(props.sortField || null);
    const setOrderData = (order, key) => {
      orderBy.value = order;
      orderKey.value = key;
    };
    const sortAsc = () => {
      data.value.rows.sort((a, b) =>
        a[orderKey.value] > b[orderKey.value]
          ? 1
          : b[orderKey.value] > a[orderKey.value]
          ? -1
          : 0
      );
    };
    const sortDesc = () => {
      data.value.rows.sort((a, b) =>
        a[orderKey.value] < b[orderKey.value]
          ? 1
          : b[orderKey.value] < a[orderKey.value]
          ? -1
          : 0
      );
    };
    const sortAndFilter = (key) => {
      if (orderBy.value === null || orderKey.value !== key) {
        setOrderData("asc", key);
        sortAsc();
      } else if (orderBy.value === "asc" && orderKey.value === key) {
        setOrderData("desc", key);
        sortDesc();
      } else {
        setOrderData(null, null);
        data.value.rows = [...defaultData.rows];

        if (search.value) {
          filter();
        }
      }
      nextTick(() => emit("render", data.value));
    };
    const sort = () => {
      if (orderBy.value === "asc") {
        sortAsc();
      } else if (orderBy.value === "desc") {
        sortDesc();
      }
      nextTick(() => emit("render", data.value));
    };
    onMounted(() => {
      if (orderKey.value) {
        sort();
      }
    });

    // Search
    const search = ref("");
    const searchColumns = ref(props.searchColumns);
    const filter = () => {
      if (!search.value) return (data.value.rows = defaultData.rows);

      const match = (entry) => {
        return entry.toString().toLowerCase().match(search.value.toLowerCase());
      };

      data.value.rows = defaultData.rows.filter((row) => {
        if (searchColumns.value && typeof searchColumns.value === "string") {
          return match(row[searchColumns.value.toLowerCase()]);
        }

        let values = Object.values(row);

        if (Array.isArray(searchColumns.value) && searchColumns.value[0]) {
          values = Object.keys(row)
            .filter((key) => searchColumns.value.includes(key))
            .map((key) => row[key]);
        }

        return (
          values.filter((value) => {
            return match(value);
          }).length > 0
        );
      });
    };
    watch(
      () => props.search,
      (searchString) => {
        search.value = searchString.toLowerCase();
        if (searchString === "") {
          data.value.rows = defaultData.rows;
        } else {
          filter();
        }
        sort();
        pageKey.value = 0;
      }
    );
    watch(
      () => props.searchColumns,
      (searchCols) => {
        searchColumns.value = searchCols;
        filter();
        sort();
        pageKey.value = 0;
      }
    );

    // Select
    const selectedRows = computed(() =>
      data.value.rows.filter((row) => row.selected === true)
    );
    const selectedIndexes = computed(() =>
      selectedRows.value.map((row) => row.mdbIndex)
    );
    const allSelected = computed(
      () => selectedIndexes.value.length === data.value.rows.length
    );
    const allSelectedCheckbox = ref(false);
    const handleCheckboxChange = (rowId, rowChecked) => {
      if (!props.multi && rowChecked === false) {
        data.value.rows.forEach((row) => {
          if (row.mdbId !== rowId) {
            row.selected = false;
          }
        });
      }

      emitSelectedValues();
      updateAllSelectedCheckbox();
    };
    const toggleSelectAll = () => {
      if (allSelected.value) {
        data.value.rows.forEach((row) => (row.selected = false));
      } else {
        data.value.rows.forEach((row) => (row.selected = true));
      }

      emitSelectedValues();
    };
    const updateAllSelectedCheckbox = () => {
      nextTick(() => (allSelectedCheckbox.value = allSelected.value));
    };
    const emitSelectedValues = () => {
      nextTick(() => {
        emit("selected-rows", selectedRows.value);
        emit("selected-indexes", selectedIndexes.value);
        emit("all-selected", allSelected.value);
      });
    };

    // Events
    const handleRowClick = (index) => {
      emit("row-click", index);
    };

    return {
      tbodyRef,
      className,
      height,
      width,
      data,
      sortAndFilter,
      orderBy,
      orderKey,
      rowsPerPage,
      datatableKey,
      pageKey,
      pages,
      firstRowIndex,
      lastRowIndex,
      selectOptions,
      toggleSelectAll,
      handleCheckboxChange,
      allSelectedCheckbox,
      handleRowClick,
      editRow,
      updateRowValues,
      updateTempValue,
      addRow,
      deleteRow,
      discardUpdate,
      editMode,
      modalEditor,
      selectedRows,
      selectedIndexes,
    };
  },
};
</script>

<template>
  <component
    :is="tag"
    :class="className"
    v-bind="$attrs"
    :style="{ maxWidth: width }"
    :key="datatableKey"
  >
    <div
      class="table-editor__inner table-responsive"
      style="overflow: auto; position: relative"
    >
      <MDBScrollbar
        :width="width"
        :height="height"
        :wheelPropagation="true"
        style="background-color: inherit"
      >
        <table class="table">
          <thead v-if="data.columns">
            <VueDraggableNext v-model="data.columns" tag="tr">
              <th scope="col" v-if="actionPosition === 'start'">
                {{ actionHeader }}
              </th>

              <th
                v-if="selectable"
                scope="col"
                :class="fixedHeader && 'fixed-cell'"
              >
                <MDBCheckbox
                  v-if="multi"
                  @click.stop="toggleSelectAll"
                  v-model="allSelectedCheckbox"
                  wrapperClass="d-flex align-items-center mb-0"
                />
              </th>
              <th
                v-for="(col, colKey) in data.columns"
                :key="'col-' + colKey"
                scope="col"
                :style="{
                  cursor: col.sort !== false ? 'pointer' : 'default',
                  minWidth: col.width + 'px',
                  maxWidth: col.width + 'px',
                  left: col.fixed && !col.right ? col.left + 'px' : false,
                  right: col.fixed && col.right ? 0 : false,
                }"
                :class="(fixedHeader || col.fixed) && 'fixed-cell'"
                @click="col.sort !== false && sortAndFilter(col.field)"
              >
                <span>{{ col.label }}</span>
                <i
                  v-if="col.sort !== false"
                  class="table-editor__sort-icon fas fa-arrow-up"
                  :class="orderBy && orderKey === col.field && 'active'"
                  :style="{
                    transform:
                      orderBy === 'desc' && orderKey === col.field
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)',
                  }"
                ></i>
              </th>
              <th scope="col" v-if="actionPosition === 'end'">
                {{ actionHeader }}
              </th>
            </VueDraggableNext>
          </thead>
          <VueDraggableNext 
            v-if="(data.rows && data.rows.length > 0) || loading"
            ref="tbodyRef" 
            v-model="data.rows" 
            tag="tbody"
          >
            <tr
              v-for="(row, rowKey) in data.rows.slice(
                pageKey * rowsPerPage,
                pageKey * rowsPerPage + rowsPerPage
              )"
              :key="'row-' + row.mdbIndex"
              :data-mdb-index="row.mdbIndex"
              :class="editMode && row.selected && 'edited-row'"
              @click="handleRowClick(row.mdbIndex)"
              scope="row"
            >
              <MDBActionButtons
                v-if="actionPosition === 'start'"
                :confirm="confirm"
                :confirmText="confirmText"
                :confirmMessage="confirmMessage"
                :dark="dark"
                :deleteRow="deleteRow"
                :discardUpdate="discardUpdate"
                :editMode="editMode"
                :editRow="editRow"
                :row="row"
                :rowKey="rowKey"
                :updateRowValues="updateRowValues"
                @addTableRow="addRow"
              />
              <td v-if="selectable">
                <MDBCheckbox
                  :data-mdb-row-index="row.mdbIndex"
                  v-model="row.selected"
                  @click.stop
                  @change="handleCheckboxChange(row.mdbIndex, row.selected)"
                />
              </td>
              <td
                v-for="(col, colKey) in data.columns"
                :key="'cell-' + colKey"
                :style="[
                  row.formats && row.formats[col.field],
                  {
                    minWidth: col.width + 'px',
                    maxWidth: col.width + 'px',
                    left: col.fixed && !col.right ? col.left + 'px' : false,
                    right: col.fixed && col.right ? 0 : false,
                  },
                ]"
                :class="col.fixed && 'fixed-cell'"
              >
                {{
                  (editMode && !row.selected) || !editMode
                    ? typeof row[col.field] === "boolean" &&
                      row[col.field] === false
                      ? false
                      : row[col.field] || defaultValue
                    : ""
                }}
                <MDBRowsEditor
                  :row="row"
                  :col="col"
                  :mode="mode"
                  v-if="editMode && row.selected && mode !== 'modal'"
                  @updateValue="updateTempValue"
                />
              </td>
              <MDBActionButtons
                v-if="actionPosition === 'end'"
                :confirm="confirm"
                :confirmText="confirmText"
                :confirmMessage="confirmMessage"
                :dark="dark"
                :deleteRow="deleteRow"
                :discardUpdate="discardUpdate"
                :editMode="editMode"
                :editRow="editRow"
                :row="row"
                :rowKey="rowKey"
                :updateRowValues="updateRowValues"
                @addTableRow="addRow"
              />
            </tr>
          </VueDraggableNext>
          <tbody v-else>
            <tr>
              <td>
                {{ noFoundMessage }}
              </td>
            </tr>
          </tbody>
        </table>
      </MDBScrollbar>
    </div>

    <div v-if="loading" class="table-editor__loader bg-light">
      <span class="table-editor__loader-inner"
        ><span class="table-editor__progress" :class="loaderClass"></span
      ></span>
    </div>
    <p v-if="loading" class="text-center text-muted my-4">Loading results...</p>

    <div class="table-editor__pagination" v-if="pagination">
      <div class="table-editor__select-wrapper">
        <p class="table-editor__select-text">{{ rowsText }}</p>
        <MDBSelect
          v-model:options="selectOptions"
          v-model:selected="rowsPerPage"
        />
      </div>
      <div class="table-editor__pagination-nav">
        {{ firstRowIndex }} - {{ lastRowIndex }} of
        {{ data.rows ? data.rows.length : "" }}
      </div>
      <div class="table-editor__pagination-buttons">
        <MDBBtn
          v-if="fullPagination"
          @click="
            () => {
              pageKey = 0;
              $nextTick(() => $emit('render', data));
            }
          "
          :ripple="false"
          color="link"
          class="table-editor__pagination-button table-editor__pagination-start"
          :disabled="pageKey === 0 ? true : null"
        >
          <i class="fa fa-angle-double-left"></i>
        </MDBBtn>
        <MDBBtn
          @click="
            () => {
              pageKey--;
              $nextTick(() => $emit('render', data));
            }
          "
          :ripple="false"
          color="link"
          class="table-editor__pagination-button table-editor__pagination-left"
          :disabled="pageKey === 0 ? true : null"
        >
          <i class="fa fa-chevron-left"></i>
        </MDBBtn>
        <MDBBtn
          @click="
            () => {
              pageKey++;
              $nextTick(() => $emit('render', data));
            }
          "
          :ripple="false"
          color="link"
          class="table-editor__pagination-button table-editor__pagination-right"
          :disabled="pageKey === pages - 1 || pages === 0 ? true : null"
        >
          <i class="fa fa-chevron-right"></i>
        </MDBBtn>
        <MDBBtn
          v-if="fullPagination"
          @click="
            () => {
              pageKey = pages - 1;
              $nextTick(() => $emit('render', data));
            }
          "
          :ripple="false"
          color="link"
          class="table-editor__pagination-button table-editor__pagination-start"
          :disabled="pageKey === pages - 1 || pages === 0 ? true : null"
        >
          <i class="fa fa-angle-double-right"></i>
        </MDBBtn>
      </div>
    </div>
    <MDBModal
      id="modalEditor"
      tabindex="-1"
      labelledby="modalEditorLabel"
      v-model="modalEditor"
      staticBackdrop
    >
      <MDBModalHeader :close="false">
        <MDBModalTitle id="modalEditorLabel">
          {{ selectedRows[0] === -1 ? newItemHeader : "Edit item" }}
        </MDBModalTitle>
      </MDBModalHeader>
      <MDBModalBody>
        <form>
          <div
            class="my-4 table-editor_input-wrapper"
            v-for="(col, key) in data.columns"
            :key="key"
          >
            <MDBRowsEditor
              :row="selectedRows[0]"
              :col="col"
              :mode="mode"
              @updateValue="updateTempValue"
            />
          </div>
        </form>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn outlilne="primary" @click="discardUpdate(selectedIndexes[0])">{{
          cancelText
        }}</MDBBtn>
        <MDBBtn color="primary" @click="updateRowValues(selectedIndexes[0])">{{
          saveText
        }}</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  </component>
</template>

<style scoped>
  .table>:not(caption)>*>* {
    border-bottom-width: 0;
  }
</style>