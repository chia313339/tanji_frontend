<!-- src/pages/Profile.vue -->
<template>
    <div>
      <h1>{{ userInfo.name }}</h1>
      <p>電話號碼: {{ userInfo.phone || '未綁定' }}</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { getUserInfo } from '../utils/auth'
  
  export default {
    name: 'Profile',
    setup() {
      const userInfo = ref({})
  
      onMounted(() => {
        userInfo.value = getUserInfo()
      })
  
      return { userInfo }
    }
  }
  </script>