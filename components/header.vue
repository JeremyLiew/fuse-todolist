<template>
  <header class="bg-white shadow p-4 flex flex-col md:flex-row md:items-center md:content-center items-center border-b">
    <div class="block md:hidden w-full">
      <div class="flex items-center justify-between w-full">
        <!-- Logo Section -->
        <div class="flex items-center justify-start">
          <img src="/logo.svg" alt="Logo" class="h-10 w-10 lg:h-15 lg:w-15 mr-2" />
          <h3 class="text-2xl lg:text-3xl font-bold text-gray-800">Logoipsum</h3>
        </div>

        <!-- User Profile Section -->
        <div class="flex items-center space-x-2">
          <div class="relative w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span class="text-gray-700 font-bold">J</span>
          </div>
          <span class="text-gray-600 text-xs cursor-pointer">
            <i class="fa-solid fa-chevron-down"></i>
          </span>
        </div>
      </div>
      <!-- Search Bar Section -->
      <div class="relative bg-gray-100 w-full h-12 flex items-center px-4 rounded mx-auto mt-4">
        <div class="w-[10%] mr-4">
            <button class="flex items-center space-x-2 text-gray-600" @click="toggleDropdown">
              <span>{{ selectedValue }}</span>
              <span class="text-red-500 text-sm cursor-pointer">
                ▼
              </span>
            </button>
            <div v-if="isDropdownOpen" class="absolute left-0 mt-2 w-32 bg-white shadow-lg rounded-md border">
              <ul>
                <li
                  class="px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-100"
                  @click="selectValue('Todo')"
                >
                  Todo
                </li>
                <li
                  class="px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-100"
                  @click="selectValue('People')"
                >
                  People
                </li>
              </ul>
            </div>
          </div>
        <!-- Search Input -->
        <div class="flex items-center w-full md:w-[80%] border-l pl-4 ml-4">
          <input
            type="text"
            class="flex-grow bg-gray-100 text-gray-600 placeholder-gray-400 outline-none"
            placeholder="Search todo list, category, milk?"
          />
        </div>
        <!-- Search Icon -->
        <div class="w-[20%] flex justify-end">
          <span class="text-red-500 text-sm pl-2 cursor-pointer">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="hidden md:contents">
      <div class="flex items-center md:w-[20%] w-full justify-start">
        <img src="/logo.svg" alt="Logo" class="h-10 w-10 lg:h-15 lg:w-15 mr-2" />
        <h3 class="text-2xl lg:text-3xl font-bold text-gray-800">Logoipsum</h3>
      </div>
      <!-- Dropdown and Search Section -->
      <div class="w-[50%] px-4 md:order-none order-1">
        <div class="relative bg-gray-100 w-[80%] h-12 flex items-center px-4 rounded mx-auto md:w-full">
          <!-- Dropdown Section -->
          <div class="w-[10%] md:w-[30%] mr-4">
            <button class="flex items-center space-x-2 text-gray-600" @click="toggleDropdown">
              <span>{{ selectedValue }}</span>
              <span class="text-red-500 text-sm cursor-pointer">
                ▼
              </span>
            </button>
            <div v-if="isDropdownOpen" class="absolute left-0 mt-2 w-32 bg-white shadow-lg rounded-md border">
              <ul>
                <li
                  class="px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-100"
                  @click="selectValue('Todo')"
                >
                  Todo
                </li>
                <li
                  class="px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-100"
                  @click="selectValue('People')"
                >
                  People
                </li>
              </ul>
            </div>
          </div>
          <!-- Search Input -->
          <div class="flex items-center w-full border-l pl-4 ml-4">
            <input
              type="text"
              class="flex-grow bg-gray-100 text-gray-600 placeholder-gray-400 outline-none"
              placeholder="Search todo list, category, milk?"
            />
          </div>
          <!-- Search Icon -->
          <div class="w-[20%] md:w-[10%] flex justify-end">
            <span class="text-red-500 text-sm pl-2 cursor-pointer">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
      </div>
      <!-- User Profile Section -->
      <div class="flex w-[30%] justify-end items-center space-x-2">
        <div class="relative w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
          <span class="text-gray-700 font-bold">J</span>
        </div>
        <span class="text-gray-600 text-xs cursor-pointer">
          <i class="fa-solid fa-chevron-down"></i>
        </span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      selectedValue: 'Todo',
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectValue(value) {
      this.selectedValue = value;
      this.isDropdownOpen = false;
    },
  },
};
</script>

<style scoped>
.relative:hover .absolute {
  display: block;
}

.absolute {
  display: none;
}
</style>
