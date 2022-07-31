<template>
  <!-- Container for demo purpose -->
  <MDBContainer class="my-5 py-5">
    <h1 class="h3 text-center py-5 mb-0">eCommerce dashboard</h1>

    <!--Section: Date-->
    <section class="mb-4">
      <MDBCard>
        <MDBCardBody class="p-4">
          <MDBRow>
            <MDBCol md="6" class="mb-4 mb-md-0">
              <MDBSelect
                v-model:options="dateOptions"
                v-model:selected="selected"
                label="Date"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBDatepicker v-model="datePicker" label="Date" />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </section>
    <!--Section: Date-->

    <!--Section: Content-->
    <section class="text-center">
      <MDBRow>
        <MDBCol xl="4" class="mb-4">
          <MDBCard>
            <MDBCardHeader bg="light" border="0" class="border-0 py-3">
              <p class="mb-0"><strong>Users & Sessions</strong></p>
            </MDBCardHeader>
            <MDBCardBody class="card-body">
              <div class="d-flex justify-content-around">
                <div>
                  <p class="mb-2">Users</p>
                  <h5>38.6K</h5>
                  <p class="text-success small">
                    <MDBIcon icon="caret-up" class="me-1"></MDBIcon
                    ><span>72.0%</span>
                  </p>
                </div>
                <div>
                  <p class="mb-2">Sessions</p>
                  <h5>50.9K</h5>
                  <p class="text-success small">
                    <MDBIcon icon="caret-up" class="me-1"></MDBIcon
                    ><span>82.0%</span>
                  </p>
                </div>
                <div>
                  <p class="mb-2">New Users</p>
                  <h5>34.0K</h5>
                  <p class="text-danger small">
                    <MDBIcon icon="caret-down" class="me-1"></MDBIcon
                    ><span>12.0%</span>
                  </p>
                </div>
              </div>

              <MDBChart type="line" :data="usersSessionsChartData" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol xl="4" class="mb-4">
          <MDBCard>
            <MDBCardHeader bg="light" border="0" class="border-0 py-3">
              <p class="mb-0"><strong>Revenue & Conversion Rate</strong></p>
            </MDBCardHeader>
            <MDBCardBody class="card-body">
              <div class="d-flex justify-content-around">
                <div>
                  <p class="mb-2">Product Revenue</p>
                  <h5>$5.35KK</h5>
                  <p class="text-success small">
                    <MDBIcon icon="caret-up" class="me-1"></MDBIcon
                    ><span>-21.6%</span>
                  </p>
                </div>
                <div>
                  <p class="mb-2">Transactions</p>
                  <h5>88</h5>
                  <p class="text-danger small">
                    <MDBIcon icon="caret-down" class="me-1"></MDBIcon
                    ><span>-22.8%</span>
                  </p>
                </div>
                <div>
                  <p class="mb-2">Conversion Rate</p>
                  <h5>0.2%</h5>
                  <p class="text-danger small">
                    <MDBIcon icon="caret-down" class="me-1"></MDBIcon
                    ><span>-1.7%</span>
                  </p>
                </div>
              </div>

              <MDBChart
                type="line"
                :data="revenueConversionChartData"
                :options="revenueConversionChartOptions"
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol xl="4" class="mb-4">
          <MDBCard>
            <MDBCardHeader bg="light" border="0" class="border-0 py-3">
              <p class="mb-0"><strong>Site Health</strong></p>
            </MDBCardHeader>
            <MDBCardBody class="card-body">
              <div class="d-flex justify-content-around">
                <div>
                  <p class="mb-2">Bounce Rate</p>
                  <h5>41.4%</h5>
                  <p class="text-success small">
                    <MDBIcon icon="caret-down" class="me-1"></MDBIcon
                    ><span>-3.3%</span>
                  </p>
                </div>
                <div>
                  <p class="mb-2">Avg. Session Duration</p>
                  <h5>03:20</h5>
                  <p class="text-success small">
                    <MDBIcon icon="caret-up" class="me-1"></MDBIcon
                    ><span>3.6%</span>
                  </p>
                </div>
                <div>
                  <p class="mb-2">Avg. Page Load Time</p>
                  <h5>3.9s</h5>
                  <p class="text-danger small">
                    <MDBIcon icon="caret-up" class="me-1"></MDBIcon
                    ><span>12.0%</span>
                  </p>
                </div>
              </div>

              <MDBChart
                type="line"
                :data="siteHealthChartData"
                :options="siteHealthChartOptions"
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
    <!--Section: Content-->

    <!--Section: Content-->
    <section class="text-center">
      <MDBRow>
        <MDBCol xl="4" class="mb-4">
          <MDBCard>
            <MDBCardHeader bg="light" border="0" class="border-0 py-3">
              <p class="mb-0"><strong>Device Performance</strong></p>
            </MDBCardHeader>
            <MDBCardBody class="card-body">
              <MDBChart
                type="bar"
                :data="devicePerformanceChartData"
                :options="devicePerformanceChartOptions"
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol xl="4" class="mb-4">
          <MDBCard>
            <MDBCardHeader bg="light" border="0" class="border-0 py-3">
              <p class="mb-0"><strong>Transactions</strong></p>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBChart
                type="bar"
                :data="transactionsChartData"
                :options="transactionsChartOptions"
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol xl="4" class="mb-4">
          <MDBCard>
            <MDBCardHeader bg="light" border="0" class="border-0 py-3">
              <p class="mb-0"><strong>Sessions</strong></p>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBChart
                type="pie"
                :data="sessionsChartData"
                :options="sessionsChartOptions"
                datalabels
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
    <!--Section: Content-->
  </MDBContainer>
  <!-- Container for demo purpose -->
</template>

<script>
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBIcon,
  MDBChart,
  MDBSelect,
  MDBDatepicker,
} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBIcon,
    MDBChart,
    MDBSelect,
    MDBDatepicker,
  },
  setup() {
    const dateOptions = ref([
      { text: "Today", value: 1 },
      { text: "Yesterday", value: 2 },
      { text: "Last 7 days", value: 3 },
      { text: "Last 28 days", value: 4 },
      { text: "Last 90 days", value: 5 },
    ]);
    const selected = ref(1);

    const datePicker = ref("Custom date");

    const usersSessionsChartData = ref({
      labels: [
        "20 Sep",
        "21 Sep",
        "22 Sep",
        "23 Sep",
        "24 Sep",
        "25 Sep",
        "26 Sep",
      ],
      datasets: [
        {
          label: "Users",
          data: [650, 590, 800, 810, 560, 550, 400],
        },
        {
          label: "Sessions",
          data: [750, 690, 900, 910, 660, 750, 500],
          backgroundColor: "rgba(66, 133, 244, 0.0)",
          borderColor: "#33b5e5",
          pointBorderColor: "#33b5e5",
          pointBackgroundColor: "#33b5e5",
        },
      ],
    });

    const revenueConversionChartOptions = ref({
      scales: {
        y: {
          ticks: {
            display: false,
          },
        },
        y1: {
          position: "left",
          ticks: {
            beginAtZero: true,
            callback: function (value) {
              return "$" + value;
            },
          },
        },
        y2: {
          position: "right",
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      },
    });

    const revenueConversionChartData = ref({
      labels: [
        "20 Sep",
        "21 Sep",
        "22 Sep",
        "23 Sep",
        "24 Sep",
        "25 Sep",
        "26 Sep",
      ],
      datasets: [
        {
          label: "Transactions",
          yAxisID: "y1",
          data: [21, 23, 25, 34, 23, 19, 9],
          order: 2,
        },
        {
          label: "Conversion rate %",

          yAxisID: "y2",
          data: [1.5, 2, 0.5, 3, 1.2, 4, 3.4],
          type: "line",
          order: 1,
          backgroundColor: "rgba(66, 133, 244, 0.0)",
          borderColor: "#94DFD7",
          borderWidth: 2,
          pointBorderColor: "#94DFD7",
          pointBackgroundColor: "#94DFD7",
          lineTension: 0.0,
        },
      ],
    });

    const siteHealthChartOptions = ref({
      scales: {
        y: {
          ticks: {
            display: false,
          },
        },
        y1: {
          position: "left",
          ticks: {
            beginAtZero: true,
            callback: function (value) {
              return value + " " + "%";
            },
          },
        },
        y2: {
          position: "right",
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      },
    });
    const siteHealthChartData = ref({
      labels: [
        "20 Sep",
        "21 Sep",
        "22 Sep",
        "23 Sep",
        "24 Sep",
        "25 Sep",
        "26 Sep",
      ],
      datasets: [
        {
          label: "Bounce rate",
          yAxisID: "y1",
          data: [51, 53, 55, 54, 53, 59, 59],
          order: 2,
        },
        {
          label: "Avg. Page Load Time (sec)",

          yAxisID: "y2",
          data: [1.5, 2, 0.5, 3, 1.2, 4, 3.4],
          type: "line",
          order: 1,
          backgroundColor: "rgba(66, 133, 244, 0.0)",
          borderColor: "#94DFD7",
          borderWidth: 2,
          pointBorderColor: "#94DFD7",
          pointBackgroundColor: "#94DFD7",
          lineTension: 0.0,
        },
      ],
    });
    const devicePerformanceChartOptions = ref({
      scales: {
        y: {
          stacked: false,
        },
        ticks: {
          beginAtZero: true,
        },
        x: {
          stacked: false,
        },
      },
    });
    const devicePerformanceChartData = ref({
      labels: ["Desktop", "Mobile", "Tablet"],

      datasets: [
        {
          label: "Users",
          data: [510, 653, 255],
        },
        {
          label: "Page views",
          data: [1251, 1553, 1355],
          backgroundColor: "#94DFD7",
          borderColor: "#94DFD7",
        },
      ],
    });
    const transactionsChartOptions = ref({
      scales: {
        y: {
          ticks: {
            display: false,
          },
        },
        y1: {
          display: true,
          position: "left",
          id: "y1",
        },
        y2: {
          display: true,
          position: "right",
          id: "y2",
          gridLines: {
            drawOnChartArea: false,
          },
          ticks: {
            beginAtZero: true,
            callback: function (value) {
              return value + " " + "%";
            },
          },
        },
        x: {
          stacked: false,
        },
      },
    });
    const transactionsChartData = ref({
      labels: ["Desktop", "Mobile", "Tablet"],

      datasets: [
        {
          label: "Transactions",
          data: [51, 65, 25],
          yAxisID: "y1",
        },
        {
          label: "Conversion rate %",
          data: [0.2, 0.8, 0.4],
          yAxisID: "y2",
          backgroundColor: "#94DFD7",
          borderColor: "#94DFD7",
        },
      ],
    });
    const sessionsChartOptions = ref({
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          formatter: (value) => {
            let sum = 0;
            let dataArr = sessionsChartData.value.datasets[0].data;
            dataArr.map((data) => {
              sum += data;
            });
            let percentage = ((value * 100) / sum).toFixed(2) + "%";
            return percentage;
          },
          color: "white",
          labels: {
            title: {
              font: {
                size: "14",
              },
            },
          },
        },
      },
    });
    const sessionsChartData = ref({
      labels: ["Desktop", "Mobile", "Tablet"],
      datasets: [
        {
          label: "Traffic",
          data: [3230, 4531, 1832],
          backgroundColor: [
            "rgba(63, 81, 181, 0.5)",
            "rgba(77, 182, 172, 0.5)",
            "rgba(66, 133, 244, 0.5)",
          ],
        },
      ],
    });

    return {
      dateOptions,
      selected,
      datePicker,
      usersSessionsChartData,
      revenueConversionChartData,
      revenueConversionChartOptions,
      siteHealthChartData,
      siteHealthChartOptions,
      devicePerformanceChartData,
      devicePerformanceChartOptions,
      transactionsChartData,
      transactionsChartOptions,
      sessionsChartData,
      sessionsChartOptions,
    };
  },
};
</script>
