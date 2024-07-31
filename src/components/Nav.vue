<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">My Website</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/profile">Profile</router-link>
            </li>
          </ul>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <img :src="userInfo.avatar" alt="Avatar" width="30" height="30" class="rounded-circle me-2">
              {{ userInfo.name }}
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li><a class="dropdown-item" href="#" @click.prevent="handleLogout">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
<script>
import { ref, onMounted } from 'vue'
import { getUserInfo, logout } from '../utils/auth.js'

export default {
  name: 'Nav',
  setup(props, { emit }) {
    const userInfo = ref({ name: 'Guest', avatar: '/images/default-avatar.png' })

    onMounted(() => {
      userInfo.value = getUserInfo()
    })

    const handleLogout = async () => {
      await logout()
      emit('logout')
    }

    return { userInfo, handleLogout }
  }
}
</script>