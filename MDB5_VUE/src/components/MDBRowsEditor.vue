<script>
import { computed, onMounted, ref } from "vue";
import { MDBInput, MDBSelect, MDBCheckbox } from "mdb-vue-ui-kit";

export default {
  components: { MDBInput, MDBSelect, MDBCheckbox },
  props: {
    row: Object,
    col: Object,
    mode: {
      type: String,
      default: "inline",
    },
    defaultValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update-value"],
  setup(props, { emit }) {
    /**
     * General
     */
    const tdValue = ref(props.row[props.col.field]);

    const label = ref(props.mode === "modal" ? props.col.label : null);

    const editable = computed(() => {
      let value = props.col.editable;
      return (value ??= true);
    });

    /**
     * Input
     */
    const inputType = ref(props.col.inputType || "text");
    const updateInput = (e) => {
      emit("update-value", { value: e.target.value, field: props.col.field });
    };

    /**
     * Select
     */

    const selected = ref("");
    const options = ref([]);

    const setOptions = () => {
      if (!props.col.options) {
        options.value = [];
        return;
      }

      const optionsArray = [];
      let currentValue;
      props.col.options.map((option, i) => {
        if (tdValue.value === option) {
          currentValue = i + 1;
        }

        optionsArray.push({
          text: option,
          value: i + 1,
          selected: tdValue.value === option,
        });
      });

      selected.value = currentValue ? currentValue : optionsArray[0].value;
      options.value = optionsArray;
    };

    const updateSelect = () => {
      if (!props.col.options) {
        return;
      }

      const selectedEl = options.value.filter(
        (option) => option.value === selected.value
      )[0];

      emit("update-value", { value: selectedEl.text, field: props.col.field });
    };

    /**
     * Checkbox
     */
    const setCheckbox = () => {
      if (inputType.value !== "checkbox") {
        return;
      }
      tdValue.value =
        typeof tdValue.value === "boolean" && tdValue.value === false
          ? false
          : tdValue.value || true;

      emit("update-value", { value: tdValue.value, field: props.col.field });
    };

    const updateCheckbox = (e) => {
      emit("update-value", { value: e.target.checked, field: props.col.field });
    };

    onMounted(() => {
      // setting default values for inputs
      setCheckbox();
      setOptions();
      updateSelect();
    });

    return {
      tdValue,
      options,
      inputType,
      updateInput,
      updateSelect,
      selected,
      updateCheckbox,
      label,
      editable,
    };
  },
};
</script>

<template>
  <span v-if="inputType === 'text' || inputType === 'number'">
    <MDBInput
      :type="inputType"
      v-model="tdValue"
      :label="label"
      @input="updateInput"
      :disabled="!editable"
    />
  </span>

  <span v-if="inputType === 'select'">
    <MDBSelect
      v-if="inputType === 'select'"
      v-model:options="options"
      v-model:selected="selected"
      :label="label"
      @change="updateSelect"
      :disabled="!editable"
    />
  </span>

  <span v-if="inputType === 'checkbox'">
    <MDBCheckbox
      v-if="inputType === 'checkbox'"
      v-model="tdValue"
      :label="label"
      @change="updateCheckbox"
      :disabled="!editable"
    />
  </span>
</template>

