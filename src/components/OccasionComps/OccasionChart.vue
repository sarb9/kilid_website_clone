<script>
import axios from "axios";
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  name : "OccasionChart",
  mounted() {
      axios({
          url : "http://www.hallows.ir/chart",
          method : "GET"
      }).then(response => {
          console.log(response);
      }).catch(error => {
        console.log(error);
      })
      this.renderChart({
      labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان' , 'آذر', 'دی' , 'بهمن' ,'اسفند'],
      datasets: [
        {
          label: 'شاخص تهران',
          backgroundColor: '#ffdf00',
          data: [40, 39, 10, 40, 39, 80, 40, 30, 20, 25, 12, 50]
        },{
            label : 'منطقه ۵',
            backgroundColor : '#ff5f00',
            data : [20 , 40 , 50, 10, 90 , 100 , 25, 30, 50, 25, 45 , 30]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  },
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