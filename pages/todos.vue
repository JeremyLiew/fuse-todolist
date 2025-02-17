<template>
  <div class="flex h-screen bg-gray-100">
    <Sidebar :todos="todos" />

    <main class="flex-1 p-6 overflow-x-auto">
      <div class="flex justify-between items-center mb-4">
        <button class="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm sm:text-base hover:bg-gray-700" @click="openCreateModal">CREATE NEW</button>
      </div>

      <div class="flex space-x-4 mb-4">
        <button class="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 text-sm sm:text-base">Filter by: Category</button>
        <button class="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 text-sm sm:text-base">Filter by: Person</button>
      </div>

      <div class="bg-white rounded-lg shadow overflow-x-auto">
        <table class="w-full whitespace-nowrap">
          <thead class="bg-gray-200">
            <tr>
              <th class="text-left p-3">ID</th>
              <th class="text-left p-3">Date</th>
              <th class="text-left p-3">Submitted By</th>
              <th class="text-left p-3">Todo</th>
              <th class="text-left p-3">Category</th>
              <th class="text-left p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="todo in todos" :key="todo.id" class="border-b hover:bg-gray-100">
              <td class="p-3">#{{ todo.id }}</td>
              <td class="p-3">{{ formatDate(todo.date) }}</td>
              <td class="p-3">{{ todo.submittedBy }}</td>
              <td class="p-3">{{ todo.task }}</td>
              <td class="p-3 capitalize">{{ todo.category }}</td>
              <td class="p-3 flex space-x-2">
                <button class="bg-yellow-400 px-4 py-1 rounded-lg text-black hover:bg-yellow-500" @click="openEditModal(todo)">Edit</button>
                <button class="bg-red-500 px-4 py-1 rounded-lg text-white hover:bg-red-600" @click="openDeleteConfirmation(todo)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>

    <div v-if="showModal" class="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-lg w-1/3 shadow-lg">
        <h3 class="text-lg font-semibold">{{ isEdit ? 'Edit Todo' : 'Create New Todo' }}</h3>
        <form @submit.prevent="isEdit ? updateTodo() : createTodo()">
          <div class="mt-4">
            <label class="block text-sm">Task</label>
            <input v-model="modalTodo.task" type="text" class="mt-2 p-2 border w-full rounded-lg" required />
          </div>
          <div class="mt-4">
            <label class="block text-sm">Submitted By</label>
            <input v-model="modalTodo.submittedBy" type="text" class="mt-2 p-2 border w-full rounded-lg" required />
          </div>
          <div class="mt-4">
            <label class="block text-sm">Category</label>
            <select v-model="modalTodo.category" class="mt-2 p-2 border w-full rounded-lg" required>
              <option value="chill">Chill</option>
              <option value="urgent">Urgent</option>
              <option value="fun">Fun</option>
            </select>
          </div>
          <div class="mt-4 flex justify-end space-x-2">
            <button type="submit" class="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700">{{ isEdit ? 'Update' : 'Create' }}</button>
            <button type="button" @click="closeModal" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <div v-if="showDeleteConfirmation" class="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 w-1/3 shadow-lg rounded-lg text-center">
        <div class="text-6xl text-orange-400 mb-2"><i class="fa-solid fa-circle-exclamation"></i></div>
        <h2 class="text-xl font-semibold">Are you sure?</h2>
        <p class="text-gray-600 mt-2">This action cannot be undone!</p>
        <div class="mt-4 flex justify-center space-x-2">
          <button @click="deleteTodo" class="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700">Yes, delete it!</button>
          <button @click="closeDeleteConfirmation" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/sidebar.vue';

export default {
  components: { Sidebar },
  data() {
    return {
      todos: [
        { id: 1, date: "2/12/2025, 10:00:00 PM", submittedBy: 'John Doe', task: 'Buy Milk', category: 'chill' },
        { id: 2, date: "2/12/2025, 10:00:00 AM", submittedBy: 'Jane Doe', task: 'Buy Eggs', category: 'urgent' }
      ],
      showModal: false,
      showDeleteConfirmation: false,
      modalTodo: { id: null, task: '', submittedBy: '', category: 'chill' },
      isEdit: false,
      todoToDelete: null
    };
  },
  methods: {
    formatDate(date) {
      const d = new Date(date);
      return d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }) +
             ', ' +
             d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    },
    openCreateModal() {
      this.isEdit = false;
      this.modalTodo = { id: null, task: '', submittedBy: '', category: 'chill' };
      this.showModal = true;
    },
    openEditModal(todo) {
      this.isEdit = true;
      this.modalTodo = { ...todo };
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    createTodo() {
      const newTodo = { ...this.modalTodo, id: this.todos.length + 1, date: new Date().toLocaleString() };
      this.todos.push(newTodo);
      this.closeModal();
    },
    updateTodo() {
      const index = this.todos.findIndex(todo => todo.id === this.modalTodo.id);
      if (index !== -1) {
        this.todos[index] = { ...this.modalTodo };
      }
      this.closeModal();
    },
    openDeleteConfirmation(todo) {
      this.todoToDelete = todo;
      this.showDeleteConfirmation = true;
    },
    closeDeleteConfirmation() {
      this.showDeleteConfirmation = false;
      this.todoToDelete = null;
    },
    deleteTodo() {
      this.todos = this.todos.filter(todo => todo.id !== this.todoToDelete.id);
      this.closeDeleteConfirmation();
    }
  }
};
</script>
