<template>
  <div>
    <h2>Welcome Home!</h2>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('loggedIn')
  router.push('/login')
}
</script>
