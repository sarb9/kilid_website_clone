<script>
import axios from "axios";
import { Bar } from "vue-chartjs";

export default {
  name: "OccasionChartRect",
  extends: Bar,
  mounted() {
    axios({
      url: "http://www.hallows.ir/chart",
      method: "GET"
    }).then(response => {
        console.log(response);
        let chartLabels = [];
        let chartData = [];
        for(let item of response.data.data) {
            chartLabels.push(item.title);
            chartData.push(item.price);
        }
        this.renderChart(
      {
        labels: chartLabels,
        datasets: [
          {
            label: "تمام مناطق",
            backgroundColor: "blue",
            data: chartData
          },
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
      })
      .catch(error => {
        console.log(error);
      });
    
  }
};
</script>

<style scoped>
.occasionChartWrapper {
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-top: 40px;
}
</style>