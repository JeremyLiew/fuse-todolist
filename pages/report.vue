<template>
    <div class="flex h-screen">
      <Sidebar :todos="selectedTodos" />
      <main class="flex-1 p-5">
        <PieChart :data="pieData" />
        <div>
          <h3>Selected Todo:</h3>
          <pre>{{ selectedTodos }}</pre>
        </div>
      </main>
    </div>
  </template>

  <script>
  import Sidebar from '../components/Sidebar.vue';

  export default {
    components: {
      Sidebar,
    },
    data() {
      return {
        pieData: {
          labels: [],
          datasets: [
            {
              label: 'Categories Distribution',
              data: [],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              hoverBackgroundColor: ['#FF5A5E', '#5A92F7', '#FF9F40'],
            },
          ],
        },
        selectedTodos: null,
      };
    },
    created() {
      const todosString = this.$route.query.todos;
      if (todosString) {
        this.selectedTodos = JSON.parse(todosString);
        this.updatePieChartData();
      }
    },
    methods: {
      updatePieChartData() {
        if (this.selectedTodos) {
          const categoryCount = this.selectedTodos.reduce((acc, todo) => {
            acc[todo.category] = (acc[todo.category] || 0) + 1;
            return acc;
          }, {});

          // Update the pie chart data
          this.pieData.labels = Object.keys(categoryCount);
          this.pieData.datasets[0].data = Object.values(categoryCount);
        }
      },
    },
  };
  </script>

  <style scoped>
  .chart-container {
    width: 100%;
    height: 400px;
  }
  </style>
