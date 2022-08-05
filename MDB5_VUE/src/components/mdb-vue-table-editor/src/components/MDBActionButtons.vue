<script>
import { MDBPopconfirm } from "mdb-vue-ui-kit";

export default {
  emits:[
    'addRow',
  ],
  props: {
    confirm: Boolean,
    confirmText: String,
    confirmMessage: String,
    dark: Boolean,
    deleteRow: Function,
    discardUpdate: Function,
    editMode: Boolean,
    editRow: Function,
    row: Object,
    rowKey: [String, Number],
    updateRowValues: Function
  },
  components: {
    MDBPopconfirm,
  },
  setup(context, props){
    const addTableRow = () => {
      context.emit('addRow');
    };
    return {
      addTableRow
    }
  }
};
</script>

<template>
  <td v-if="editMode && row.selected">
    <button
      :class="[
        'me-2',
        'btn',
        'btn-lg',
        `text-${dark ? 'light' : 'dark'}`,
        'save-button',
      ]"
      @click="updateRowValues(rowKey)"
    >
      <i class="fa fa-check"></i>
    </button>
    <button
      :class="[
        'btn',
        'btn-lg',
        `text-${dark ? 'light' : 'dark'}`,
        'discard-button',
      ]"
      @click="discardUpdate(rowKey)"
    >
      <i class="fa fa-ban"></i>
    </button>
  </td>
  <td v-else>
    <button
      :class="[
        'me-2',
        'btn',
        'btn-lg',
        `text-${dark ? 'light' : 'dark'}`,
        'edit-button',
      ]"
      :disabled="editMode ? true : null"
      @click="editRow(row.mdbIndex)"
    >
      <i class="far fa-edit"></i>
    </button>
    <button
      v-if="!confirm"
      :class="[
        'me-2',
        'btn',
        'btn-lg',
        `text-${dark ? 'light' : 'dark'}`,
        'delete-button',
        `${editMode ? 'disabled' : ''}`,
      ]"
      @click="deleteRow(row.mdbIndex)"
    >
      <i class="far fa-trash-alt"></i>
    </button>
    <button
      :class="[
        'btn',
        'btn-lg',
        `text-${dark ? 'light' : 'dark'}`,
        'add-button',
        `${editMode ? 'disabled' : ''}`,
      ]"
      @click="addTableRow"
    >
      <i class="fa fa-plus"></i>
    </button>
    <MDBPopconfirm
      v-else
      message="Are you sure you want to delete this entry?"
      :confirmLabel="confirmText"
      @confirm="deleteRow(row.mdbIndex)"
      :class="['btn-lg', 'btn-white', `text-${dark ? 'light' : 'dark'}`]"
    >
      <i class="far fa-trash-alt" style="pointer-events: none"></i>
    </MDBPopconfirm>
  </td>
</template>

