<template>
  <Nav v-if="showNav" @logout="handleLogout" />
  <router-view @login="handleLogin"></router-view>
</template>

<script>
import { ref, computed, onMounted, provide, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Nav from './components/Nav.vue'
import { checkAuth } from './utils/auth'

export default {
  name: 'App',
  components: { Nav },
  setup() {
    const isAuthenticated = ref(false)
    const router = useRouter()
    const route = useRoute()

    const checkAuthStatus = async () => {
      isAuthenticated.value = await checkAuth()
    }

    const showNav = computed(() => {
      return isAuthenticated.value && route.path !== '/register'
    })

    const handleLogout = () => {
      isAuthenticated.value = false
      router.push('/login')
    }

    const handleLogin = () => {
      checkAuthStatus()
    }

    onMounted(checkAuthStatus)

    watchEffect(() => {
      console.log('Authentication status:', isAuthenticated.value)
      console.log('Current route:', route.path)
      console.log('Show Nav:', showNav.value)
    })

    provide('updateAuth', checkAuthStatus)

    return { showNav, handleLogout, handleLogin }
  }
}
</script>