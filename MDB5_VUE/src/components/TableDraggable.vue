<script>
import { ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
export default {
  components: {
    VueDraggableNext,
  },
  setup() {
    const list = ref([]);
    const dragging = ref(false);
    list.value = [
      { id: 1, name: "Abby", sport: "basket" },
      { id: 2, name: "Brooke", sport: "foot" },
      { id: 3, name: "Courtenay", sport: "volley" },
      { id: 4, name: "David", sport: "rugby" },
    ];
    return {
        list
    }
  },
};
</script>


<template>
  <table class="table table-striped">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Sport</th>
      </tr>
    </thead>
    <VueDraggableNext v-model="list" tag="tbody" item-key="name">
        <tr v-for="element in list" :key="element.id">
          <td scope="row">{{ element.id }}</td>
          <td>{{ element.name }}</td>
          <td>{{ element.sport }}</td>
        </tr>
    </VueDraggableNext>
  </table>
</template>