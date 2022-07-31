<template>
  <!-- Container for demo purpose -->
  <MDBContainer class="my-5 py-5">
    <h1 class="h3 text-center py-5 mb-0">Traffic dashboard</h1>

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

    <!--Section: Design Block-->
    <section>
      <MDBRow>
        <MDBCol lg="3" md="6" class="mb-4">
          <MDBCard>
            <MDBCardBody>
              <p class="text-uppercase small mb-2">
                <strong>USERS</strong>
              </p>
              <h5 class="mb-0">
                <strong>14 567</strong>
                <small class="text-success ms-2">
                  <MDBIcon
                    icon="arrow-up"
                    size="sm"
                    class="pe-1"
                  />13,48%</small
                >
              </h5>

              <hr />

              <p class="text-uppercase text-muted small mb-2">
                Previous period
              </p>
              <h5 class="text-muted mb-0">11 467</h5>
            </MDBCardBody>
          </MDBCard>
          <!-- Card -->
        </MDBCol>

        <MDBCol lg="3" md="6" class="mb-4">
          <MDBCard>
            <MDBCardBody>
              <p class="text-uppercase small mb-2">
                <strong>PAGE VIEWS</strong>
              </p>
              <h5 class="mb-0">
                <strong>51 354 </strong>
                <small class="text-success ms-2">
                  <MDBIcon
                    icon="arrow-up"
                    size="sm"
                    class="pe-1"
                  />23,58%</small
                >
              </h5>

              <hr />

              <p class="text-uppercase text-muted small mb-2">
                Previous period
              </p>
              <h5 class="text-muted mb-0">38 454</h5>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="3" md="6" class="mb-4">
          <MDBCard>
            <MDBCardBody>
              <p class="text-uppercase small mb-2">
                <strong>AVERAGE TIME</strong>
              </p>
              <h5 class="mb-0">
                <strong>00:04:20</strong>
                <small class="text-danger ms-2">
                  <MDBIcon
                    icon="arrow-down"
                    size="sm"
                    class="pe-1"
                  />23,58%</small
                >
              </h5>

              <hr />

              <p class="text-uppercase text-muted small mb-2">
                Previous period
              </p>
              <h5 class="text-muted mb-0">00:05:20</h5>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="3" md="6" class="mb-4">
          <MDBCard>
            <MDBCardBody>
              <p class="text-uppercase small mb-2">
                <strong>BOUNCE RATE</strong>
              </p>
              <h5 class="mb-0">
                <strong>32.35%</strong>
                <small class="text-danger ms-2">
                  <MDBIcon
                    icon="arrow-down"
                    size="sm"
                    class="pe-1"
                  />23,58%</small
                >
              </h5>

              <hr />

              <p class="text-uppercase text-muted small mb-2">
                Previous period
              </p>
              <h5 class="text-muted mb-0">24.35%</h5>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
    <!--Section: Design Block-->

    <!--Section: Content-->
    <section>
      <MDBRow>
        <MDBCol md="8" class="mb-4">
          <MDBCard>
            <MDBCardBody>
              <MDBTabs v-model="activeTab">
                <!-- Pills navs -->
                <MDBTabNav pills justify tabsClasses="mb-3">
                  <MDBTabItem tabId="ex1-1" href="#ex1-1">Users</MDBTabItem>

                  <MDBTabItem tabId="ex1-2" href="#ex1-2"
                    >Page views</MDBTabItem
                  >

                  <MDBTabItem tabId="ex1-3" href="#ex1-3"
                    >Average time</MDBTabItem
                  >

                  <MDBTabItem tabId="ex1-4" href="#ex1-4"
                    >Bounce rate</MDBTabItem
                  >
                </MDBTabNav>
                <!-- Pills navs -->
                <!-- Pills content -->
                <MDBTabContent>
                  <MDBTabPane tabId="ex1-1">
                    <MDBChart
                      type="line"
                      :data="usersChartData"
                      :options="usersChartOptions"
                    />
                  </MDBTabPane>
                  <MDBTabPane tabId="ex1-2">
                    <MDBChart type="line" :data="pageViewsChartData" />
                  </MDBTabPane>
                  <MDBTabPane tabId="ex1-3">
                    <MDBChart type="line" :data="averageTimeChartData" />
                  </MDBTabPane>
                  <MDBTabPane tabId="ex1-4">
                    <MDBChart type="line" :data="bounceRateChartData" />
                  </MDBTabPane>
                </MDBTabContent>
                <!-- Pills content -->
              </MDBTabs>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="4" class="mb-4">
          <MDBCard class="mb-4">
            <MDBCardBody>
              <p class="text-center"><strong>Current period</strong></p>
              <MDBChart
                type="pie"
                :data="pieChartCurrentChartData"
                :options="pieChartOptions"
                datalabels
              />
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardBody>
              <p class="text-center"><strong>Previous period</strong></p>
              <MDBChart
                type="pie"
                :data="pieCharttPreviousChartData"
                :options="pieChartOptions"
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
  MDBIcon,
  MDBChart,
  MDBSelect,
  MDBDatepicker,
  MDBTabs,
  MDBTabPane,
  MDBTabContent,
  MDBTabItem,
  MDBTabNav,
} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBChart,
    MDBSelect,
    MDBDatepicker,
    MDBTabs,
    MDBTabPane,
    MDBTabContent,
    MDBTabItem,
    MDBTabNav,
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

    const activeTab = ref("ex1-1");

    const usersChartOptions = ref({
      scales: {
        y: {
          stacked: false,
        },
      },
    });

    const usersChartData = ref({
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday ",
      ],
      datasets: [
        {
          label: "Current period",
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "Previous period",
          data: [28, 48, 40, 19, 86, 27, 90],
          backgroundColor: "rgba(66, 133, 244, 0.0)",
          borderColor: "#33b5e5",
          pointBorderColor: "#33b5e5",
          pointBackgroundColor: "#33b5e5",
        },
      ],
    });
    const pageViewsChartData = ref({
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday ",
      ],
      datasets: [
        {
          label: "Current period",
          data: [25, 49, 40, 21, 56, 75, 30],
        },
        {
          label: "Previous period",
          data: [58, 18, 30, 59, 46, 77, 90],
          backgroundColor: "rgba(66, 133, 244, 0.0)",
          borderColor: "#33b5e5",
          pointBorderColor: "#33b5e5",
          pointBackgroundColor: "#33b5e5",
        },
      ],
    });
    const averageTimeChartData = ref({
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday ",
      ],
      datasets: [
        {
          label: "Current period",
          data: [431, 123, 435, 123, 345, 234, 124],
        },
        {
          label: "Previous period",
          data: [654, 234, 123, 432, 533, 422, 222],
          backgroundColor: "rgba(66, 133, 244, 0.0)",
          borderColor: "#33b5e5",
          pointBorderColor: "#33b5e5",
          pointBackgroundColor: "#33b5e5",
        },
      ],
    });
    const bounceRateChartData = ref({
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday ",
      ],
      datasets: [
        {
          label: "Current period",
          data: [41, 12, 35, 13, 45, 34, 12],
        },
        {
          label: "Previous period",
          data: [65, 24, 13, 43, 33, 42, 22],
          backgroundColor: "rgba(66, 133, 244, 0.0)",
          borderColor: "#33b5e5",
          pointBorderColor: "#33b5e5",
          pointBackgroundColor: "#33b5e5",
        },
      ],
    });
    const pieChartOptions = ref({
      plugins: {
        legend: {
          position: "right",
          labels: {
            boxWidth: 10,
          },
        },
        datalabels: {
          formatter: (value) => {
            let sum = 0;
            let dataArr = pieChartCurrentChartData.value.datasets[0].data;
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
    const pieChartCurrentChartData = ref({
      labels: ["New visitor", "Returning visitor"],
      datasets: [
        {
          label: "Traffic",
          data: [502355, 423545],
          backgroundColor: [
            "rgba(66, 133, 244, 0.6)",
            "rgba(77, 182, 172, 0.6)",
          ],
        },
      ],
    });
    const pieCharttPreviousChartData = ref({
      labels: ["New visitor", "Returning visitor"],
      datasets: [
        {
          label: "Traffic",
          data: [402355, 523545],
          backgroundColor: [
            "rgba(66, 133, 244, 0.6)",
            "rgba(77, 182, 172, 0.6)",
          ],
        },
      ],
    });

    return {
      dateOptions,
      selected,
      datePicker,
      usersChartOptions,
      usersChartData,
      pageViewsChartData,
      averageTimeChartData,
      bounceRateChartData,
      pieChartOptions,
      pieChartCurrentChartData,
      pieCharttPreviousChartData,
      activeTab,
    };
  },
};
</script>
