<template>
  <!-- Container for demo purpose -->
  <MDBContainer>
    <h1 class="h3 text-center py-5 mb-0">SEO dashboard</h1>

    <!--Section: Index-->
    <section>
      <MDBRow>
        <MDBCol lg="6" class="mb-4 mb-lg-0">
          <MDBRow>
            <MDBCol lg="6" class="mb-4">
              <MDBCard class="text-center">
                <MDBCardHeader bg="light" border="0">
                  <strong>Indexed Pages on Google</strong>
                </MDBCardHeader>
                <MDBCardBody>
                  <p class="mb-2">Unique pages</p>
                  <h5>34</h5>

                  <hr />

                  <div class="d-flex justify-content-between">
                    <div>
                      <p class="mb-2"><small>Percentage change</small></p>
                      <p class="mb-2 text-success">
                        <MDBIcon icon="caret-up" class="me-1"></MDBIcon
                        ><span>3.0%</span>
                      </p>
                    </div>
                    <div>
                      <p class="mb-2"><small>Absolute change</small></p>
                      <p class="mb-2 text-success">
                        <MDBIcon icon="caret-up" class="me-1"></MDBIcon
                        ><span>1</span>
                      </p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="6" class="mb-4">
              <MDBCard class="text-center">
                <MDBCardHeader bg="light" border="0">
                  <strong>Indexed Queries on Google</strong>
                </MDBCardHeader>
                <MDBCardBody>
                  <p class="mb-2">Unique Keywords</p>
                  <h5>860</h5>

                  <hr />

                  <div class="d-flex justify-content-between">
                    <div>
                      <p class="mb-2"><small>Percentage change</small></p>
                      <p class="mb-2 text-danger">
                        <MDBIcon icon="caret-down" class="me-1"></MDBIcon
                        ><span>-12.7%</span>
                      </p>
                    </div>
                    <div>
                      <p class="mb-2"><small>Absolute change</small></p>
                      <p class="mb-2 text-danger">
                        <MDBIcon icon="caret-down" class="me-1"></MDBIcon
                        ><span>-125</span>
                      </p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg="6" class="mb-4">
              <MDBCard>
                <MDBCardBody>
                  <MDBChart
                    type="doughnut"
                    :data="devices1ChartData"
                    :options="devicesChartOptions"
                    datalabels
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="6">
              <MDBCard>
                <MDBCardBody>
                  <MDBChart
                    type="doughnut"
                    :data="devices2ChartData"
                    :options="devicesChartOptions"
                    datalabels
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBCol>

        <MDBCol lg="6" class="mb-4">
          <MDBCard>
            <MDBCardBody>
              <MDBChart
                type="line"
                :data="pagesAndQueriesChartData"
                :options="pagesAndQueriesChartOptions"
                style="height: 390px"
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
    <!--Section: Index-->

    <!--Section: KPI-->
    <section class="text-center">
      <!--Section: KPI-->
      <section class="mb-4">
        <MDBCard class="card">
          <MDBCardHeader bg="light" border="0" class="text-center py-3">
            <strong>Google Organic Search KPIs</strong>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBTable hover responsive class="text-nowrap">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Impressions</th>
                  <th scope="col">Clicks</th>
                  <th scope="col">Site CTR</th>
                  <th scope="col">Average Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Value</th>
                  <td>17,842</td>
                  <td>168</td>
                  <td>0.94%</td>
                  <td>48.5</td>
                </tr>
                <tr>
                  <th scope="row">Percentage change</th>
                  <td>
                    <span class="text-success">
                      <MDBIcon icon="caret-up" class="me-1" /><span>17.7%</span>
                    </span>
                  </td>
                  <td>
                    <span class="text-danger">
                      <MDBIcon icon="caret-down" class="me-1" /><span
                        >-38.2%</span
                      >
                    </span>
                  </td>
                  <td>
                    <span class="text-success">
                      <MDBIcon icon="caret-up" class="me-1" /><span>25.0%</span>
                    </span>
                  </td>
                  <td>
                    <span class="text-success">
                      <MDBIcon icon="caret-up" class="me-1" /><span>10.3%</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Absolute change</th>
                  <td>
                    <span class="text-success">
                      <MDBIcon icon="caret-up" class="me-1" /><span>3,825</span>
                    </span>
                  </td>
                  <td>
                    <span class="text-danger">
                      <MDBIcon icon="caret-down" class="me-1" /><span
                        >-104</span
                      >
                    </span>
                  </td>
                  <td>
                    <span class="text-success">
                      <MDBIcon icon="caret-up" class="me-1" /><span>0.31%</span>
                    </span>
                  </td>
                  <td>
                    <span class="text-success">
                      <MDBIcon icon="caret-up" class="me-1" /><span>4.52</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </MDBTable>
          </MDBCardBody>
        </MDBCard>
      </section>
      <!--Section: KPI-->

      <!--Section: Content-->
      <section>
        <MDBCard>
          <MDBCardBody>
            <div style="height: 300px">
              <MDBChart
                type="line"
                :data="impressionsAndClickChartData"
                :options="impressionsAndClickChartOptions"
              />
            </div>

            <MDBTable responsive class="text-nowrap">
              <thead>
                <tr>
                  <th scope="col">Week</th>
                  <th scope="col">Impressions</th>
                  <th scope="col">Clicks</th>
                  <th scope="col">Site CTR</th>
                  <th scope="col">Average position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">31.08.2020 - 6.02.2020</th>
                  <td>1586</td>
                  <td>17</td>
                  <td>1.07%</td>
                  <td>48.98</td>
                </tr>
                <tr>
                  <th scope="row">24.08.2020 - 30.08.2020</th>
                  <td>4,693</td>
                  <td>56</td>
                  <td>1.19%</td>
                  <td>49.15</td>
                </tr>
                <tr>
                  <th scope="row">17.08.2020 - 23.08.2020</th>
                  <td>4,613</td>
                  <td>44</td>
                  <td>0.95%</td>
                  <td>49.34</td>
                </tr>
                <tr>
                  <th scope="row">10.08.2020 - 16.08.2020</th>
                  <td>4,911</td>
                  <td>48</td>
                  <td>0.98%</td>
                  <td>47.95</td>
                </tr>
              </tbody>
            </MDBTable>
          </MDBCardBody>
        </MDBCard>
      </section>
      <!--Section: Content-->
    </section>
    <!--Section: KPI-->
  </MDBContainer>
  <!-- Container for demo purpose -->
</template>

<script>
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBChart,
  MDBTable,
} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBChart,
    MDBTable,
  },
  setup() {
    const devicesChartOptions = ref({
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
            let dataArr = devices1ChartData.value.datasets[0].data;
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
                size: "9",
              },
            },
          },
        },
      },
    });
    const devices1ChartData = ref({
      labels: ["Desktop", "Mobile", "Tablet"],
      datasets: [
        {
          label: "Traffic",
          data: [2112, 2343, 2545],
          backgroundColor: [
            "rgba(63, 81, 181, 0.5)",
            "rgba(77, 182, 172, 0.5)",
            "rgba(66, 133, 244, 0.5)",
          ],
        },
      ],
    });
    const devices2ChartData = ref({
      labels: ["Desktop", "Mobile", "Tablet"],
      datasets: [
        {
          label: "Traffic",
          data: [2112, 2943, 1545],
          backgroundColor: [
            "rgba(63, 81, 181, 0.5)",
            "rgba(77, 182, 172, 0.5)",
            "rgba(66, 133, 244, 0.5)",
          ],
        },
      ],
    });
    const pagesAndQueriesChartOptions = ref({
      maintainAspectRatio: false,
      scales: {
        y: {
          stacked: false,
        },
      },
    });
    const pagesAndQueriesChartData = ref({
      labels: [
        "06.08.2020",
        "07.08.2020",
        "08.08.2020",
        "09.08.2020",
        "10.08.2020",
        "11.08.2020",
        "12.08.2020",
      ],
      datasets: [
        {
          label: "Unique pages",
          data: [25, 49, 40, 21, 56, 75, 30],
        },
        {
          label: "Unique queries",
          data: [58, 18, 30, 59, 46, 77, 90],
          backgroundColor: "rgba(66, 133, 244, 0.0)",
          borderColor: "#33b5e5",
          pointBorderColor: "#33b5e5",
          pointBackgroundColor: "#33b5e5",
        },
      ],
    });
    const impressionsAndClickChartOptions = ref({
      maintainAspectRatio: false,
      scales: {
        y: {
          stacked: false,
        },
      },
    });
    const impressionsAndClickChartData = ref({
      labels: [
        "06.08.2020",
        "07.08.2020",
        "08.08.2020",
        "09.08.2020",
        "10.08.2020",
        "11.08.2020",
        "12.08.2020",
        "13.08.2020",
        "14.08.2020",
        "15.08.2020",
        "16.08.2020",
        "17.08.2020",
        "18.08.2020",
        "19.08.2020",
      ],
      datasets: [
        {
          label: "Impressions",
          data: [
            125, 449, 340, 521, 256, 475, 130, 125, 449, 340, 521, 256, 475,
            130,
          ],
        },
        {
          label: "Clicks",
          data: [
            358, 518, 130, 759, 246, 377, 190, 358, 518, 130, 759, 246, 377,
            190,
          ],
          backgroundColor: "rgba(66, 133, 244, 0.0)",
          borderColor: "#33b5e5",
          pointBorderColor: "#33b5e5",
          pointBackgroundColor: "#33b5e5",
        },
      ],
    });

    return {
      devicesChartOptions,
      devices1ChartData,
      devices2ChartData,
      pagesAndQueriesChartOptions,
      pagesAndQueriesChartData,
      impressionsAndClickChartOptions,
      impressionsAndClickChartData,
    };
  },
};
</script>
