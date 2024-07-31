<template>
    <div>
      <h1>註冊</h1>
      <form @submit.prevent="handleRegister">
        <div class="mb-3">
          <label for="phone" class="form-label">電話號碼</label>
          <input v-model="phone" type="tel" class="form-control" id="phone" required>
        </div>
        <button type="submit" class="btn btn-primary">綁定</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { register } from '../utils/auth.js'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'Register',
    setup() {
      const phone = ref('')
      const router = useRouter()
  
      const handleRegister = () => {
        register(phone.value)
        router.push('/')
      }
  
      return { phone, handleRegister }
    }
  }
  </script>