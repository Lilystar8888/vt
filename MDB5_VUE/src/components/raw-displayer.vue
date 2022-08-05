<script>
import { ref } from "vue";

export default {
  props:  {
    title: {
        required: true,
        type: String
    },
    value: {
        required: true
    }
  },
  setup(props){ 

    const valueString = ref("");
    valueString.value = JSON.stringify(props.value, null, 2);

    return {
        valueString
    }
  }
};
</script>

<template>
  <div>
    <h3>{{ title }}</h3>
    <pre>{{ valueString }}</pre>
  </div>
</template>

<style scoped>
pre {
  text-align: start;
}
</style>