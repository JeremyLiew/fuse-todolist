<template>
    <aside class="w-32 md:w-64 bg-stone-700 text-white p-2 md:p-5">
      <h2 class="text-[12px] sm:text-lg font-normal mb-6">
        Welcome to <span class="text-yellow-400 underline">Poh Kit</span>
        <br />
        Todolist dashboard
      </h2>
      <hr class="-mx-5 text-black opacity-25">
      <nav class="mt-6">
        <ul class="text-xs sm:text-lg">
          <li class="mb-4">
            <button
              class="w-full flex items-center space-x-2 px-4 py-2 rounded hover:bg-gray-700"
              :class="{ 'bg-gray-700': isActiveRoute('/todos') }"
              @click="todos"
            >
              <span class="w-2 h-2 bg-red-500 rounded-full"></span>
              <span>ALL TODO LIST</span>
            </button>
          </li>
          <li class="mb-20">
            <button
              class="w-full flex items-center space-x-2 px-4 py-2 rounded hover:bg-gray-700"
              :class="{ 'bg-gray-700': isActiveRoute('/report') }"
              @click="report"
            >
              <span class="w-2 h-2 bg-red-500 rounded-full"></span>
              <span>REPORT</span>
            </button>
          </li>
          <hr class="-mx-5 text-white opacity-25">
          <li class="mt-5">
            <button @click="logout" class="w-full flex items-center space-x-2 px-4 py-2 text-red-400 hover:bg-gray-700 rounded">
              <span class="w-2 h-2 bg-red-500 rounded-full"></span>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  </template>

  <script>
  export default {
    props: {
      todos: Array,
    },
    methods: {
      report() {
        console.log(this.todos);
        const todosString = JSON.stringify(this.todos);
        console.log(todosString);
        this.$router.push({ name: 'report', query: { todos: todosString } });
      },
      todos() {
        this.$router.push('/todos');
      },
      logout() {
        this.$router.replace('/login');
      },
      isActiveRoute(route) {
        return this.$route.path === route;
      },
    },
  };
  </script>
