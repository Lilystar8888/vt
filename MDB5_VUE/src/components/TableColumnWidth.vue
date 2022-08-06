<script>
import { ref, onMounted } from "vue";
export default {
  setup() {

    const thElm = ref(undefined);
    const startOffset = ref(0);

    onMounted(() => {

        Array.prototype.forEach.call(
          document.querySelectorAll("table th"),
          function (th) {
            th.style.position = "relative";

            var grip = document.createElement("div");
            grip.innerHTML = "&nbsp;";
            grip.style.top = 0;
            grip.style.right = 0;
            grip.style.bottom = 0;
            grip.style.width = "5px";
            grip.style.position = "absolute";
            grip.style.cursor = "col-resize";
            grip.addEventListener("mousedown", function (e) {
              thElm.value = th;
              startOffset.value = th.offsetWidth - e.pageX;
            });

            th.appendChild(grip);
          }
        );

        document.addEventListener("mousemove", function (e) {
          if (thElm.value) {
            thElm.value.style.width = startOffset.value + e.pageX + "px";
          }
        });

        document.addEventListener("mouseup", function () {
          thElm.value = undefined;
        });
    });

    return {
    };
  },
};
</script>

<template>
  <table ref="tableRef">
    <thead>
      <tr>
        <th>th 1</th>
        <th>th 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>td 1</td>
        <td>td 2</td>
      </tr>
    </tbody>
  </table>
</template>


<style>
table {
  border-width: 1px;
  border-style: solid;
  border-color: black;
  border-collapse: collapse;
}
table td {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
table th {
  border-width: 1px;
  border-style: solid;
  border-color: black;
  background-color: green;
}
</style>