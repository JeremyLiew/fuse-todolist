import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
import { Pie } from 'vue-chartjs';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('PieChart', Pie);
});
