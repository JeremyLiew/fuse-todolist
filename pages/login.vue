<template>
    <div class="flex flex-col justify-center min-h-screen items-center">
        <div>
            <div class="flex mb-10">
                <img class="w-20 h-20 mr-2" src="/public/logo.svg" alt="">
                <h3 class="text-5xl font-bold">Logoipsum</h3>
            </div>
            <div>
                <form @submit.prevent="login">
                    <div class="mb-6">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            v-model="email"
                            placeholder="e.g. you@example.com"
                            class="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>
                    <div class="mb-10 relative">
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        :type="showPassword ? 'text' : 'password'"
                        id="password"
                        v-model="password"
                        placeholder="Minimum 8 characters"
                        class="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                    />
                    <button type="button" @click="togglePassword" class="absolute inset-y-0 top-6 right-5 flex items-center">
                        <svg v-if="showPassword" class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-3.594 0-6.813-1.906-9-5a12.17 12.17 0 014.5-4.5M3 3l18 18"></path>
                        </svg>
                        <svg v-else class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                    </button>
                    </div>
                    <button
                    type="submit"
                    class="p-7 bg-red-700 hover:bg-red-900 text-white py-3 rounded-full font-semibold transition duration-200"
                    >
                    Log In
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        email: '',
        password: '',
        showPassword: false,
        };
    },
    methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    login() {
      this.$router.push('/todos');
    }
  }
}
</script>
