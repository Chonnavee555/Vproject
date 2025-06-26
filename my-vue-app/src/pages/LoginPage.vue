<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p v-if="error" style="color:red">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

const handleLogin = async () => {
  error.value = ''
  try {
    const response = await axios.post('http://10.100.84.47/api/login', {
      username: username.value,
      password: password.value
    })
    if (response.data.success) {
      // ตัวอย่าง เก็บ token
      localStorage.setItem('token', response.data.token)
      router.push('/home')
    } else {
      error.value = response.data.message || 'Login failed'
    }
  } catch (err) {
    error.value = 'Server error or cannot connect to backend'
  }
}
</script>
