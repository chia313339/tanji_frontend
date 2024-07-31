<template>
    <div>
      <h1>登入</h1>
      <button @click="handleGoogleLogin" class="btn btn-primary">使用 Google 帳號登入</button>
    </div>
  </template>
  
  <script>
  import { login } from '../utils/auth.js'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'Login',
    setup(props, { emit }) {
      const router = useRouter()
  
      const handleGoogleLogin = async () => {
        // 模擬 Google 登錄
        const mockGoogleUser = {
          name: 'Test User',
          imageUrl: '/images/default-avatar.png',
          email: 'test@example.com'
        }
        await login(mockGoogleUser)
        emit('login')  // 觸發登入事件
        router.push('/register')
      }
  
      return { handleGoogleLogin }
    }
  }
  </script>